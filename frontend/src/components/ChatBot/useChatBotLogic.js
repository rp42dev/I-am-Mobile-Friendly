import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../ContextProvider';

const useChatBotLogic = () => {
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

        setDisabled(true);
        
        if (userInput !== 'clear' && userInput !== 'Open ChatBot'){
            setMessages((prevMessages) => [...prevMessages, { text: userInput, response: 'user' }]);
        }
        try {
            const response = await axios.post('/openai', { userInput }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
            });

            if (response.data.response === 'Chat cleared.') {
                setMessages([]);
                return;
            }

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

    const clearMessages = () => {
        setMessages([]);
        setDisabled(false);
        sendMessageToOpenAI('clear');
    };

    const openChatBot = () => {
        setDisabled(true);
        sendMessageToOpenAI('Open ChatBot');
    };

    return {
        messages,
        disabled,
        drawerOpen,
        clearMessages,
        openChatBot,
        sendMessageToOpenAI
    };
};

export default useChatBotLogic;
