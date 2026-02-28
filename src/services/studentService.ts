import { apiInstanceAuth } from "../utils/axios";

export const getStudents = async () =>
    apiInstanceAuth.get("/students").then((res) => res.data);

export const createStudent = async (courseData: FormData) =>
    apiInstanceAuth
        .post("/students", courseData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => res.data);
