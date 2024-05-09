import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';

const MessagePopup = ({ message, error, onClose }) => {
    const sanitizedMessage = DOMPurify.sanitize(message);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    if (!message) {
        return null; // Do not render the popup if there is no message or if there is an error
    }

    return (
        <div className="fixed inset-0 z-40 transition-opacity h-screen flex items-center justify-center w-full px-4 py-6 pointer-events-none sm:p-6 sm:items-center sm:justify-center bg-base-100/75">
            <div className="fixed inset-0 z-50 transition-opacity flex items-center justify-center w-full px-4 py-6 pointer-events-none sm:p-6 sm:items-center sm:justify-center">
                <div className={`px-4 py-6 max-w-sm w-full bg-base-100 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden border ${error ? 'border-red-500' : 'border-green-500'}`}>
                    <p className="text-center font-medium  px-4 py-4" dangerouslySetInnerHTML={{ __html: sanitizedMessage }}></p>
                </div>
            </div>
        </div>
    );
};

export default MessagePopup;