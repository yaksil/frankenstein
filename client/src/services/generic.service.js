import axios from 'axios';

const API_URL = 'https://localhost:3000/api'

/**
 * generic controller kinda low-key
 * @param url
 * @param method
 * @param data
 * @returns {Promise<*>}
 */
export const request = async ({ url, method, data = {} }) => {
    return await axios[method](`${API_URL}/${url}`, data)
};