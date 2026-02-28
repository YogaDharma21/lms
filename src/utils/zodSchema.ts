import z, { email } from "zod";

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

export const updateCourseSchema = createCourseSchema.partial({
    thumbnail: true,
});

const hasActualText = (value: string | undefined): boolean => {
    if (!value) return false;
    const strippedText = value.replace(/<[^>]*>/g, "").trim();
    return strippedText.length > 0;
};

export const mutateContentSchema = z
    .object({
        title: z.string().min(5),
        type: z.string().min(3, { message: "Type is Required" }),
        youtubeId: z.string().optional(),
        text: z.string().optional(),
    })
    .superRefine((val, ctx) => {
        const parseVideoId = z.string().min(4).safeParse(val.youtubeId);
        if (val.type === "video") {
            if (!parseVideoId.success) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Youtube ID is required",
                    path: ["youtubeId"],
                });
            }
        }

        if (val.type === "text") {
            if (!hasActualText(val.text)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Content Text is required",
                    path: ["text"],
                });
            }
        }
    });

export const createStudentSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(5),
    photo: z
        .instanceof(File, { message: "Photo is required" })
        .refine((file) => file !== undefined && file !== null, {
            message: "Photo is required",
        }),
});
