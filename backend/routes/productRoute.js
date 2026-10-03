import express from "express"
import { addProduct, removeProduct, allProducts, popularProducts, uploadProduct } from "../controllers/productController.js"
import upload from "../middleware/uploadMiddleware.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/addproduct", authMiddleware, addProduct)
router.post("/removeproduct", authMiddleware, removeProduct)
router.get("/allproducts", allProducts)
router.get("/popular", popularProducts)
router.post("/upload", authMiddleware, upload.single("product"), uploadProduct)


export default router