import multer from "multer";

export const fileStorage = (path = "courses") =>
    multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `public/uploads/${path}`);
        },
        filename: (req, file, cb) => {
            const originalName = file.originalname.split(".");
            const ext = originalName.length > 1 ? originalName[1] : "";
            const uniqId = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
            cb(null, `${file.fieldname}-${uniqId}${ext ? `.${ext}` : ""}`);
        },
    });
    
export const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/gif" ||
        file.mimetype === "image/webp"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
