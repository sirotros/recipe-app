import axios from "axios";

export const api = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    apiKey: process.env.API_KEY
  },
});
