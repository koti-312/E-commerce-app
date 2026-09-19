import express from "express"
import {addProduct,removeProduct,allProducts,popularProducts,uploadProduct} from "../controllers/productController.js"
import upload from "../middleware/uploadMiddleware.js"

const router = express.Router()

router.post("/addproduct", addProduct)
router.post("/removeproduct", removeProduct)
router.get("/allproducts", allProducts)
router.get("/popular", popularProducts)
router.post("/upload", upload.single("product"), uploadProduct)


export default router