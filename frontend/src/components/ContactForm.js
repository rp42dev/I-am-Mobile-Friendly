import { useState } from 'react';
import axios from 'axios';

function SendEmailForm() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [fromEmail, setFromEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // Your code for sending the email goes here
        axios.post('api/send-email/', {
            subject: `New message from ${name}`,
            name: name,
            message: message,
            fromEmail: fromEmail,
        })
            .then((response) => {
                console.log(response);
            }
            )
    }

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 w-full max-w-2xl mx-auto lg:mx-0 mt-6">

            <input
                className="input input-bordered w-full"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />


            <input
                className="input input-bordered w-full"
                id="fromEmail"
                type="email"
                placeholder="Email"
                value={fromEmail}
                onChange={(event) => setFromEmail(event.target.value)}
            />


            <textarea
                className="input input-bordered w-full h-40"
                id="message"
                placeholder="Your message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            ></textarea>

            <button className="btn btn-primary w-full" type="submit">Send</button>
        </form>
    );
}

export default SendEmailForm;
