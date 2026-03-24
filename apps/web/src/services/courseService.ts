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
        .post("/courses", courseData)
        .then((res) => res.data);

export const updateCourse = async (data: FormData, id: string) =>
    apiInstanceAuth
        .put(`/courses/${id}`, data)
        .then((res) => res.data);

export const deleteCourse = async (id: string) =>
    apiInstanceAuth.delete(`/courses/${id}`).then((res) => res.data);

export const createContent = async (data: FormData) =>
    apiInstanceAuth.post(`/courses/contents`, data).then((res) => res.data);

export const getDetailContent = async (id: string) =>
    apiInstanceAuth.get(`/courses/contents/${id}`).then((res) => res.data);

export const updateContent = async (data: FormData, id: string) =>
    apiInstanceAuth
        .put(`/courses/contents/${id}`, data)
        .then((res) => res.data);

export const deleteDetailContent = async (id: string) =>
    apiInstanceAuth.delete(`/courses/contents/${id}`).then((res) => res.data);

export const getStudentCourse = async (id: string) =>
    apiInstanceAuth.get(`/courses/students/${id}`).then((res) => res.data);

export const addStudentCourse = async (data: FormData, id: string) =>
    apiInstanceAuth
        .post(`/courses/students/${id}`, data)
        .then((res) => res.data);

export const deleteStudentCourse = async (data: any, id: string) =>
    apiInstanceAuth
        .put(`/courses/students/${id}`, data)
        .then((res) => res.data);
