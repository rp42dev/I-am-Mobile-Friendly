import { useState, useEffect, useContext } from 'react';
import { Context } from '../../ContextProvider';

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

const useChatBotLogic = () => {
    const [csrfToken, setCsrfToken] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState();
    const [disabled, setDisabled] = useState(false);
    const { drawerOpen } = useContext(Context);
    const [drawerWasOpen, setDrawerWasOpen] = useState(false);

    useEffect(() => {
        if (drawerOpen && !drawerWasOpen) {
            openChatBot();
            setDrawerWasOpen(true);
        } else if (!drawerOpen && drawerWasOpen) {
            sendMessageToOpenAI('clear');
            setDrawerWasOpen(false);
        }
    }, [drawerOpen, drawerWasOpen]);

    useEffect(() => {
        setCsrfToken(getCookie('csrftoken'));
    }, []);

    const sendMessageToOpenAI = async (userInput) => {
        setDisabled(true);

        if (userInput !== 'clear' && userInput !== 'Open ChatBot') {
            setMessages((prevMessages) => [...prevMessages, { text: userInput, response: 'user' }]);
        }
        let fullText = '';
        try {
            const response = await fetch('/assistant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify({ userInput }),
            });

            if (!response.body) {
                throw new Error('ReadableStream not supported by this browser.');
            }
            if (response.status === 204) {
                clearMessages();
                return;
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                fullText += chunk;
                setMessage(fullText);
            }       
        } catch (error) {
            console.error('Error sending message to OpenAI:', error);
        } finally {
            if (fullText) {
                setMessages((prevMessages) => [...prevMessages, { text: fullText, response: 'assistant' }]);
                setMessage();
                setDisabled(false);
            }
        }
    };

    const clearMessages = () => {
        setMessage();
        setMessages([]);
        setDisabled(false);
    };

    const openChatBot = () => {
        setDisabled(true);
        sendMessageToOpenAI('Open ChatBot');
    };

    return {
        message,
        messages,
        disabled,
        sendMessageToOpenAI
    };
};

export default useChatBotLogic;
