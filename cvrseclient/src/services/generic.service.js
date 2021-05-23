require("dotenv").config();
import axios from "axios";

const API_URL = "http://192.168.0.39:4545/api";

/**
 * generic controller kinda low-key
 * @param url
 * @param method
 * @param data
 * @returns {Promise<*>}
 */
export const request = async ({ url, method, data = {} }) => {
  const response = await axios[method](`${API_URL}/${url}`, data);
  return response.data;
};
