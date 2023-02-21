import multer from "multer";
const maxSize = 1 * 5024 * 5024; // for 1MB

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "../my-react/src/assets/gambar/");
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
            const ext = file.originalname.split(".").pop();
            cb(null, file.fieldname + "-" + uniqueSuffix + "." + ext);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/svg+xml"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },
    limits: {
        fileSize: maxSize,
    },
});

export default upload;
