import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getCompanies = () => axios.get(API_URL);
export const createCompany = (data) => axios.post(API_URL, data);
export const updateCompany = (id, data) => axios.put(`${API_URL}/${id}`, data); // Edit API
export const deleteCompany = (id) => axios.delete(`${API_URL}/${id}`);
