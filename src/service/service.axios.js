import axios from 'axios';
import { BASE_URL } from '../constants/constant.url';

const defaultHeaders = {
    'Content-Type': 'application/json',
};

const baseUrl = BASE_URL;

export async function post(url, data) {
    try {
        const response = await axios.post(`${baseUrl}${url}`, { ...data }, { defaultHeaders });
        return response.data;
    } catch (error) {
        const errorResponse = error.response.data;
        if (errorResponse.message) {
            throw new Error(errorResponse.message);
        } else {
            throw new Error('algo deu errado');
        }
    }
}

export async function get(url) {
    try {
        const response = await axios.get(`${baseUrl}${url}`, { defaultHeaders });
        return response.data;
    } catch (error) {
        const errorResponse = error.response.data;
        if (errorResponse.message) {
            throw new Error(errorResponse.message);
        } else {
            throw new Error('algo deu errado');
        }
    }
}
