import axios from "axios";
import { getSecureItem, removeSecureItem } from "./secureStorage";
import { STORAGE_KEY } from "./const";
const baseURL = import.meta.env.VITE_API_URL;
interface Session {
    token: string;
    [key: string]: unknown;
}

const apiInstance = axios.create({
    baseURL,
    timeout: 3000,
});

export const apiInstanceAuth = axios.create({
    baseURL,
    timeout: 3000,
});

apiInstanceAuth.interceptors.request.use((config) => {
    const session = getSecureItem<Session>(STORAGE_KEY);

    if (!session) {
        return config;
    }

    config.headers.Authorization = `JWT ${session.token}`;

    return config;
});

apiInstanceAuth.interceptors.response.use(
    (response) => response,
    (err) => {
        const status = err?.response?.status;

        if (status === 400 || status === 401) {
            const message = err?.response?.data?.message;
            
            if (message === "Token expired" || message === "Invalid token" || message === "Unauthorization") {
                removeSecureItem(STORAGE_KEY);
                window.location.replace("/manager/sign-in");
            } else if (status === 400) {
                window.location.replace("/manager/sign-in");
                removeSecureItem(STORAGE_KEY);
            }
        }
    },
);

export default apiInstance;
