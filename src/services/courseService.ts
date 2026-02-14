import { apiInstanceAuth } from "../utils/axios";

export const getCourse = async () =>
    apiInstanceAuth.get("/courses").then((res) => res.data);

export const getCategories = async () =>
    apiInstanceAuth.get("/categories").then((res) => res.data);

export const getCourseDetail = async (id: string, isPreview: boolean = false) =>
    apiInstanceAuth
        .get(`/courses/${id}${isPreview ? "?preview=true" : ""}`)
        .then((res) => res.data);

export const createCourse = async (courseData: FormData) =>
    apiInstanceAuth
        .post("/courses", courseData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => res.data);

export const updateCourse = async (data: FormData, id: string) =>
    apiInstanceAuth
        .put(`/courses/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => res.data);

export const deleteCourse = async (id: string) =>
    apiInstanceAuth.delete(`/courses/${id}`).then((res) => res.data);
