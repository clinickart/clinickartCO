import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Contact API
export const contactAPI = {
    submit: async (data) => {
        const response = await api.post('/contact', data);
        return response.data;
    },
    getAll: async () => {
        const response = await api.get('/contact');
        return response.data;
    }
};

// Services API
export const servicesAPI = {
    getAll: async () => {
        const response = await api.get('/services');
        return response.data;
    },
    getById: async (id) => {
        const response = await api.get(`/services/${id}`);
        return response.data;
    }
};

// Testimonials API
export const testimonialsAPI = {
    getAll: async () => {
        const response = await api.get('/testimonials');
        return response.data;
    },
    getById: async (id) => {
        const response = await api.get(`/testimonials/${id}`);
        return response.data;
    }
};

export default api;
