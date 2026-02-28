import { apiInstanceAuth } from "../utils/axios";

export const getStudents = async () =>
    apiInstanceAuth.get("/students").then((res) => res.data);
