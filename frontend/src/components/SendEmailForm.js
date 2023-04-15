import { useState, useEffect } from 'react';
import axios from 'axios';

function SendEmailForm() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [fromEmail, setFromEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // Your code for sending the email goes here
        axios.post('api/send-email/', {
            subject: subject,
            message: message,
            fromEmail: fromEmail,
        })
            .then((response) => {
                console.log(response);
            }
        )
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
                    Subject
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subject"
                    type="text"
                    placeholder="Email subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Email message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="fromEmail">
                    From email address
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fromEmail"
                    type="email"
                    placeholder="Your email address"
                    value={fromEmail}
                    onChange={(event) => setFromEmail(event.target.value)}
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Send email
                </button>
            </div>
        </form>
    );
}

export default SendEmailForm;
