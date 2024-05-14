import React, { useEffect } from 'react';
import { ArrowUp } from "@phosphor-icons/react";
import useChatBotLogic from './useChatBotLogic';
import { scrollChatArea, getUserInput } from './utils';

import patternImage from '../../assets/images/patern_chat.webp';
import AnimatedCircles from '../../assets/images/animated-circles.svg';


const ChatMessage = ({ message }) => {
    return (
        <div className={`chat w-full ${message.response === 'assistant' ? 'chat-start' : 'chat-end'}`}>
            <div className={`chat-bubble ${message.response === 'assistant' ? 'bg-base-100' : 'bg-base-200'}`}>
                <span className="text-sm text-base-content">{message.text}</span>
            </div>
        </div>
    );
};


const ChatInput = ({ handleSend, disabled }) => {
    return (
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
    );
};


const ChatArea = ({ messages, disabled }) => {
    return (
        <div className="chat-area p-3 rounded-lg overflow-auto border border-base-300 relative h-full flex justify-end flex-col shadow-[inset_3px_0_8px_rgba(0,0,0,0.1)]">
            <img src={patternImage} alt="pattern" className="absolute top-0 left-0 w-full h-full object-cover opacity-40" />

            {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
            ))}

            {disabled &&
                <div className="chat w-full chat-start">
                    <div className="chat-bubble bg-base-100 py-0 grid place-items-center">
                        <img src={AnimatedCircles} alt="animated circles" className="w-10 h-10 text-base-content opacity-50" />
                    </div>
                </div>
            }
        </div>
    );
};

const ChatBot = () => {
    const { messages, disabled, drawerOpen, clearMessages, openChatBot, sendMessageToOpenAI } = useChatBotLogic();

    useEffect(() => {
        if (!drawerOpen) {
            clearMessages();
            return;
        }
        openChatBot();
    }, [drawerOpen]);

    const handleSend = (event) => {
        event.preventDefault();

        const userInput = getUserInput(event);

        event.target.userInput.value = '';

        if (!userInput) {
            return;
        }

        sendMessageToOpenAI(userInput);
    };

    useEffect(() => {
        scrollChatArea();
    }, [messages]);

    return (
        <div className="w-full max-w-md h-dvh p-3 bg-base-200 overflow-auto flex flex-col justify-between">
            <div className=" bg-base-200 pb-3">
                <button className="btn btn-circle btn-sm m-2">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className=""><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                </button>
            </div>

            <ChatArea messages={messages} disabled={disabled} />

            <ChatInput handleSend={handleSend} disabled={disabled} />
        </div>
    );
}

export default ChatBot;