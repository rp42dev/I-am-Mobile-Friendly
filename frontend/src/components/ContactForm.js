import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import axios from 'axios';

import { PaperPlaneTilt } from "@phosphor-icons/react";


const MessagePopup = ({ message, setMessage, error, setError }) => {
    const sanitizedMessage = DOMPurify.sanitize(message);

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage(null);
                setError(false);
            }, 5000);
        }

    }, [message, setMessage]);
    console.log(message); 
    return (
        <>
            {message && (
                <div className="fixed inset-0 z-50 transition-opacity flex items-center justify-center w-full px-4 py-6 pointer-events-none sm:p-6 sm:items-center sm:justify-center">
                    <div className={`px-4 py-6 max-w-sm w-full bg-base-100 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden border border-primary ${error ? 'border-red-500' : 'border-green-500'}`}>
                        <p className="text-center font-medium  px-4 py-4"dangerouslySetInnerHTML={{__html: sanitizedMessage}}></p>
                    </div>
                </div>

            )}
        </>


    );
};

function SendEmailForm() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [responseText, setResponseText] = useState('');
    const [errors, setErrors] = useState(false);


    function handleSubmit(event) {
        event.preventDefault();
        // Your code for sending the email goes here
        if (!name || !message || !fromEmail) {
            setErrors(true);
            setResponseText('Please fill out all fields.');
            return;
        }
        axios.post('api/send-email/', {
            subject: `New message from ${name}`,
            name: name,
            message: message,
            fromEmail: fromEmail,
        })
            .then((response) => {
                console.log(response);
                setName('');
                setMessage('');
                setFromEmail('');
                setResponseText('Thank you! Your message has been sent.');
                setErrors(false);
            })
            .catch((error) => {
                console.log(error);
                setErrors(true);
                setResponseText('Sorry, something went wrong. Please try again later.');
            })
    }

    return (
        <>
            <MessagePopup message={responseText} setMessage={setResponseText} error={errors} setError={setErrors} />
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 w-full max-w-2xl mx-auto lg:mx-0 mt-6">

                <input
                    className={`input input-bordered ${errors && !name && 'input-error'}`}
                    id="name"
                    type="text"
                    placeholder={`${errors && !name ? 'Please enter your name.' : 'Name'}`}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    className={`input input-bordered ${errors && !fromEmail && 'input-error'}`}
                    id="fromEmail"
                    type="email"
                    placeholder={`${errors && !fromEmail ? 'Please enter your email address.' : 'Email'}`}
                    value={fromEmail}
                    onChange={(event) => setFromEmail(event.target.value)}
                />
                

                <textarea
                    className={`input input-bordered w-full h-40 ${errors && !message && 'input-error'}`}
                    id="message"
                    placeholder={`${errors && !message ? 'Please enter your message.' : 'Message'}`}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                ></textarea>
                <button className="btn btn-primary w-full" type="submit">Send</button>
            </form>
        </>
    );
}

export default SendEmailForm;
