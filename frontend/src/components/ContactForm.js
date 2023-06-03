import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { PaperPlaneTilt } from "@phosphor-icons/react";
import { validateFields } from '../utils/validation';

import MessagePopup from './MessagePopup';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [responseText, setResponseText] = useState('');
    const [error, setError] = useState(false);
    const [errors, setErrors] = useState({});
    const [csrfToken, setCsrfToken] = useState('');


    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const validationErrors = validateFields(name, message, fromEmail);
            setErrors(validationErrors);
        }
    }, [name, message, fromEmail]);

    useEffect(() => {
        function getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    // Does this cookie string begin with the name we want?
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

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validateFields(name, message, fromEmail);

        document.querySelector('button[type="submit"]').disabled = true;

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        axios.post('/send-email', {
            name, message, fromEmail
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
        })
            .then(response => {
                console.log(response.data);
                setName('');
                setMessage('');
                setFromEmail('');
                window.location.href = '/contact-success';
                setResponseText('Thank you! Your message has been sent.');
                setError(false);
                setErrors({});
            })
            .catch(error => {
                setResponseText('Sorry, something went wrong. Please try again later.');
                setError(true);
                console.error(error);
            });
    };

    const handleCloseMessage = () => {
        setResponseText('');
        document.querySelector('button[type="submit"]').disabled = false;
        setError(false);
    };
    return (
        <>
            <MessagePopup message={responseText} error={error} onClose={handleCloseMessage} />
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 w-full max-w-2xl mx-auto lg:mx-0 mt-6" noValidate>
                <div className="relative w-full">
                    <input
                        className={`input w-full input-bordered ${errors.name && 'input-error'}`}
                        id="name"
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    {errors.name && <p className="absolute -bottom-3.5 left-2 text-xs text-red-500">{errors.name}</p>}

                </div>
                <div className="relative w-full">

                    <input
                        className={`w-full input input-bordered ${errors.fromEmail && 'input-error'}`}
                        id="fromEmail"
                        type="email"
                        placeholder='Email'
                        value={fromEmail}
                        onChange={(event) => setFromEmail(event.target.value)}
                    />
                    {errors.fromEmail && <p className="absolute -bottom-3.5 left-2 text-xs text-red-500">{errors.fromEmail}</p>}
                </div>
                <div className="relative w-full">
                    <textarea
                        className={`input input-bordered w-full h-40 ${errors.message && 'input-error'}`}
                        id="message"
                        placeholder='Message'
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                    {errors.message && <p className="absolute -bottom-2 left-2 text-xs text-red-500">{errors.message}</p>}
                </div>
                <button className="btn btn-primary w-100 sm:w-60 sm:mx-auto lg:mx-0" type="submit" disabled={Object.keys(errors).length > 0}>
                    Send &nbsp;<PaperPlaneTilt size={20} />
                </button>

            </form>

        </>
    );
};

export default ContactForm;
