import axios from 'axios';

const apiService = axios.create({
    baseURL: 'api/',
    withCredentials: true,
    xsrfHeaderName: 'X-CSRFToken',
    xsrfCookieName: 'csrftoken',
});

export const sendEmail = (data) => {
    return apiService.post('/send-email/', data);
};