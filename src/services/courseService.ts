import { apiInstanceAuth } from "../utils/axios";

export const getCourse = async () =>
    apiInstanceAuth.get("/courses").then((res) => res.data);

export const getCategories = async () =>
    apiInstanceAuth.get("/categories").then((res) => res.data);

export const createCourse = async (courseData: FormData) =>
    apiInstanceAuth
        .post("/courses", courseData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => res.data);
