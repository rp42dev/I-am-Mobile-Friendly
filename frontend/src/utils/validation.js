export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Text validation with improved error handling
export const validateText = (text) => {
    const re = /[<>{}[\]`]/;
    return !re.test(text);
};

// Form fields validation with input sanitization
export const validateFields = (name, message, fromEmail) => {
    const sanitizedName = sanitizeInput(name);
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedEmail = sanitizeInput(fromEmail);

    const errors = {};

    if (!sanitizedName) {
        errors.name = 'Please enter your name.';
    } else if (!validateText(sanitizedName)) {
        errors.name = 'Please enter a valid name. Special characters are not allowed.';
    }

    if (!sanitizedEmail) {
        errors.fromEmail = 'Please enter your email address.';
    } else if (!validateEmail(sanitizedEmail)) {
        errors.fromEmail = 'Please enter a valid email address.';
    }

    if (!sanitizedMessage) {
        errors.message = 'Please enter your message.';
    } else if (!validateText(sanitizedMessage)) {
        errors.message = 'Please enter a valid message. Special characters are not allowed.';
    }

    return errors;
};


const sanitizeInput = (input) => {
    // Remove any HTML tags
    const sanitizedInput = input.replace(/<[^>]+>/g, '');

    // Escape special characters
    const escapedInput = sanitizedInput.replace(/[<>{}[\]`]/g, '\\$&');

    return escapedInput;
};