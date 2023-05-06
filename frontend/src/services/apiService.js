import axios from 'axios';

const apiService = axios.create({
    baseURL: 'api/',
});

export const sendEmail = (data) => {
    return apiService.post('send-email/', data);
};