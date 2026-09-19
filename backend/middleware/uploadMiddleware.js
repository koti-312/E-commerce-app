import multer from "multer"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import cloudinary from "../config/cloudinary.js"

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "ecommerce-products",
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        public_id: (req, file) => `product_${Date.now()}`
    }
})

const upload = multer({
    storage: storage
})

export default upload