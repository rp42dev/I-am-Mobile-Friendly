import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ChatBot = () => {
    const [csrfToken, setCsrfToken] = useState('');
    const [messages, setMessages] = useState([]);
    const [disabled, setDisabled] = useState(false);

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


    const handleSend = (event) => {
        event.preventDefault();

        const userInput = event.target.userInput.value.trim();

        if (!userInput) {
            return;
        }

        setDisabled(true);

        // Add user message to chat
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: userInput, response: 'user' }
        ]);

        // Clear the input field
        event.target.userInput.value = '';
        
        // Call function to send user input to OpenAI
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
              
                <div className="chat-area p-3 rounded-lg h-full overflow-auto">
                    <div className="chat w-full chat-start">
                        <div className="chat-bubble bg-base-100">Hello! I'm a chatbot. Ask me anything!</div>
                    </div>
                    {messages.map((message, index) => (
                        <div key={index} className={`chat w-full ${message.response === 'assistant' ? 'chat-start' : 'chat-end'}`}>
                            <div className={`chat-bubble ${message.response === 'assistant' ? 'bg-base-100' : 'bg-base-200'}`}>{message.text}</div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="pt-3 pb-8 bg-base-200">
                <form action="" method="post" onSubmit={handleSend}>
                    <input type="text" placeholder="Type here" name="userInput" id="userInput" className="input p-2 input-base w-full" disabled={disabled} />
                    <div className="flex justify-end mt-2">
                        <button className="btn btn-outline btn-primary m-1" disabled={disabled}>Send</button>
                    </div>
                </form>
            </div>
        </div>

    );
}


export default ChatBot;