import z from "zod";

export const exampleSchema = z.object({
    name: z.string().min(3),
});

export const signUpSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(5)
})
