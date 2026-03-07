import { apiInstanceAuth } from "../utils/axios";

export const getStudents = async () =>
    apiInstanceAuth.get("/students").then((res) => res.data);

export const getDetailStudent = async (id: string) =>
    apiInstanceAuth.get(`/students/${id}`).then((res) => res.data);

export const createStudent = async (courseData: FormData) =>
    apiInstanceAuth
        .post("/students", courseData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => res.data);

export const updateStudent = async (data: any, id: string) =>
    apiInstanceAuth
        .put(`/students/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => res.data);

export const deleteStudent = async (id: string) =>
    apiInstanceAuth.delete(`/students/${id}`).then((res) => res.data);
