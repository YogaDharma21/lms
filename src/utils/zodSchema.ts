import z from "zod";

export const signUpSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(5),
});

export const signInSchema = signUpSchema.omit({ name: true });

export const createCourseSchema = z.object({
    name: z.string().min(5),
    categoryId: z.string().min(1, { message: "Please select a category" }),
    tagline: z.string().min(5),
    description: z.string().min(10),
    thumbnail: z
        .instanceof(File, { message: "Thumbnail is required" })
        .optional()
        .refine((file) => file !== undefined && file !== null, {
            message: "Thumbnail is required",
        }),
});
