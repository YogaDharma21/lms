import apiInstance from "../utils/axios";

export const postSignUp = async (data: {
    name: string;
    email: string;
    password: string;
}) => apiInstance.post("/sign-up", data).then((res) => res.data);

// export const postSignIn = async (data: { email: string; password: string }) =>
//     apiInstance.post("/sign-in", data).then((res) => res.data);
