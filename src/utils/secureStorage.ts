import * as CryptoJS from "crypto-js";

const SECRET_KEY =
    import.meta.env.VITE_SECRET_KEY ||
    "default-secret-key-change-in-production";

export const encryptData = (data: unknown): string => {
    const jsonString = JSON.stringify(data);
    return CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
};

export const decryptData = <T = unknown>(encryptedData: string): T | null => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedString) as T;
    } catch (error) {
        console.error("Failed to decrypt data:", error);
        return null;
    }
};

export const setSecureItem = (key: string, value: unknown): void => {
    const encrypted = encryptData(value);
    localStorage.setItem(key, encrypted);
};

export const getSecureItem = <T = unknown>(key: string): T | null => {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;
    return decryptData<T>(encrypted);
};

export const removeSecureItem = (key: string): void => {
    localStorage.removeItem(key);
};
