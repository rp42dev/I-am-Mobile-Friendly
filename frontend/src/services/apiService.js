import axios from 'axios';

const apiService = axios.create({
    baseURL: 'api/',
});

apiService.defaults.xsrfCookieName = 'csrftoken';
apiService.defaults.xsrfHeaderName = 'X-CSRFToken';

export const sendEmail = (data) => {
    return apiService.post('/send-email/', data);
};