import multer, { diskStorage } from "multer";
import { v4 } from "uuid"

const imgConfig = diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./temp");
    },
    filename: (req, file, callback) => {
        callback: (null, v4() + Date.now + file.originalname)
    }
});

const isType = async (req, file, callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true)
    }
    else {
        callback(new Error("Only image is Allowed"))
    }
}

const uploadImage = multer({ storage: imgConfig, fileFilter: isType }).single("file")

export default uploadImage