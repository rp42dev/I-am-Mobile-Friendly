import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../ContextProvider';
import { ArrowUp } from "@phosphor-icons/react";
import axios from 'axios';


const AnimatedCircles = () => {
    return (
        <svg
            version="1.1"
            id="L5"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-20 40 110 20"
            enableBackground="new 0 0 0 0"
            xmlSpace="preserve"
            className='w-10 h-10 text-base-content opacity-50'
        >
            <circle fill="currentColor" stroke="none" cx="6" cy="50" r="6">
                <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 15 ; 0 -15; 0 15"
                    repeatCount="indefinite"
                    begin="0.1"
                />
            </circle>
            <circle fill="currentColor" stroke="none" cx="30" cy="50" r="6">
                <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 10 ; 0 -10; 0 10"
                    repeatCount="indefinite"
                    begin="0.2"
                />
            </circle>
            <circle fill="currentColor" stroke="none" cx="54" cy="50" r="6">
                <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.3"
                />
            </circle>
        </svg>
    );
};


const ChatBot = () => {
    const [csrfToken, setCsrfToken] = useState('');
    const [messages, setMessages] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const { drawerOpen, setDrawerOpen } = useContext(Context);

    useEffect(() => {
        function getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        setCsrfToken(getCookie('csrftoken'));
    }, []);

    const sendMessageToOpenAI = async (userInput) => {
        try {
            const response = await axios.post('/openai', { userInput }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
            });

            setMessages((prevMessages) => [
                ...prevMessages,
                { text: response.data.response, response: 'assistant' }
            ]);
        } catch (error) {
            console.error('Error sending message to OpenAI:', error);
            // Handle error gracefully (e.g., display error message to the user)
        } finally {
            setDisabled(false);
        }
    };

    const scroll = () => {
        const chatArea = document.querySelector('.chat-area');
        chatArea.scrollTop = chatArea.scrollHeight;
    };

    useEffect(() => {
        if (!drawerOpen) {
            setMessages([]);
            return;
        }
        setDisabled(true);
        sendMessageToOpenAI('Open ChatBot');
    }, [drawerOpen]);

    const handleSend = (event) => {
        event.preventDefault();

        const userInput = event.target.userInput.value.trim();

        if (!userInput) {
            return;
        }

        setDisabled(true);

        setMessages((prevMessages) => [
            ...prevMessages,
            { text: userInput, response: 'user' }
        ]);

        event.target.userInput.value = '';
        sendMessageToOpenAI(userInput);
    };

    useEffect(() => {
        scroll();
    }, [messages]);

    return (
        <div className="w-full max-w-md h-dvh p-3 bg-base-200 overflow-auto flex flex-col justify-between">
            <div className=" bg-base-200 pb-3">
                <button className="btn btn-circle btn-sm m-2">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className=""><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                </button>
            </div>

            <div className="h-full flex flex-col justify-end bg-base-300 rounded overflow-hidden">

                <div className="chat-area p-3 rounded-lg overflow-auto border border-base-300">

                    {messages.map((message, index) => (
                        <div key={index} className={`chat w-full ${message.response === 'assistant' ? 'chat-start' : 'chat-end'}`}>
                            <div className={`chat-bubble ${message.response === 'assistant' ? 'bg-base-100' : 'bg-base-200'}`}>
                                <span className="text-sm text-base-content">{message.text}</span>
                            </div>
                        </div>
                    ))}

                    {disabled &&
                        <div className="chat w-full chat-start">
                            <div className="chat-bubble bg-base-100 py-0 grid place-items-center">
                                <AnimatedCircles />
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="pt-3 pb-8 bg-base-200">
                <form action="" method="post" onSubmit={handleSend}>
                    <div className="w-full relative">
                        <input type="text" placeholder="Type here" name="userInput" id="userInput" className="focus:outline-none input p-2 input-base border border-base-300 w-full" disabled={disabled} />

                        <button className="bg-base-200 join-item absolute right-0 p-2.5 m-1 rounded tooltip tooltip-left" disabled={disabled} data-tip="Send Message">
                            <span className='text-base-content'>
                                <ArrowUp size={20} />
                            </span>
                        </button>

                    </div>
                </form>
            </div>
        </div>

    );
}


export default ChatBot;