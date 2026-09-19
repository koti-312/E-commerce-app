import express from "express"
import fetchUser from "../middleware/authMiddleware.js"
import {addToCart,removeFromCart} from "../controllers/cartController.js"

const router = express.Router()

router.post("/addtocart", fetchUser, addToCart)
router.post("/removefromcart", fetchUser, removeFromCart)

export default router