import z from "zod";

// Helper function to validate MongoDB ObjectId
const objectIdRegex = /^[a-fA-F0-9]{24}$/;
const isValidObjectId = (val) => objectIdRegex.test(val);

const objectIdSchema = z.string().refine(isValidObjectId, {
    message: "Invalid MongoDB ObjectId format",
});

export const exampleSchema = z.object({
    name: z.string().min(3),
});

export const signUpSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(5),
});

export const signInSchema = signUpSchema.omit({ name: true }).extend({
    password: z.string().min(1, "Password is required"),
});

export const mutateCourseSchema = z.object({
    name: z.string().min(5),
    categoryId: objectIdSchema,
    tagline: z.string().min(5),
    description: z.string().min(10),
});

export const mutateContentSchema = z.object({
    title: z.string().min(5),
    type: z.enum(["video", "text"]),
    youtubeId: z.string().optional(),
    text: z.string().optional(),
    courseId: objectIdSchema,
});

export const mutateStudentSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(5),
});

export const addStudentCourseSchema = z.object({
    studentId: objectIdSchema,
});

export const mutateCategorySchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
});
