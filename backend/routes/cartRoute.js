import express from "express"
import {addToCart,getCart,removeFromCart} from "../controllers/cartController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/addtocart", authMiddleware, addToCart)
router.get("/getcart",authMiddleware,getCart)
router.post("/removefromcart",authMiddleware, removeFromCart)

export default router