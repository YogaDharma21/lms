import axios from "axios";
import { getSecureItem, removeSecureItem } from "./secureStorage";
import { STORAGE_KEY } from "./const";

interface Session {
    token: string;
    role?: string;
    [key: string]: unknown;
}

const baseURL = import.meta.env.VITE_API_URL;

const getRedirectUrl = (role?: string): string => {
    return role === "student" ? "/student/sign-in" : "/manager/sign-in";
};

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

            const session = getSecureItem<Session>(STORAGE_KEY);
            const userRole = session?.role;
            const redirectUrl = getRedirectUrl(userRole);

            if (message === "Token expired" || message === "Invalid token" || message === "Unauthorization") {
                removeSecureItem(STORAGE_KEY);
                window.location.replace(redirectUrl);
            } else if (status === 400) {
                window.location.replace(redirectUrl);
                removeSecureItem(STORAGE_KEY);
            }
        }
    },
);

export default apiInstance;
