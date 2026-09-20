import express from "express"
import {chatwithAI} from "../controllers/aiController.js"


const router=express.Router()
router.post("/chat",chatwithAI)


export default router