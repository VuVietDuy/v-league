import axios from "axios";
import { store } from "../store/store";

const backendUrl = "http://localhost:8000/api/v1";

const fetcher = axios.create({
  baseURL: backendUrl,
});

fetcher.interceptors.request.use(
  function (config) {
    const state = store.getState();
    const accessToken = state?.token.accessToken;
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default fetcher;
