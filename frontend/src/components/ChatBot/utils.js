export const scrollChatArea = () => {
    const chatArea = document.querySelector('.chat-area');
    chatArea.scrollTop = chatArea.scrollHeight;
};

export const getUserInput = (event) => {
    return event.target.userInput.value.trim();
};
