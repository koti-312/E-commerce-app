import {GoogleGenAI} from "@google/genai"
import dotenv from "dotenv"
dotenv.config()

const geminiai=new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
})

export const chatwithAI=async (req,res)=>{
    
    try{
        const{message}=req.body
        const response=await geminiai.models.generateContent({
            model:"gemini-3.8-flash",
            contents:message
        })
        res.status(200).json({
            success:true,
            reply:response.text
        })
    }
    catch(error){
        console.error("Gemini AI Error:",error.message)
        res.status(500).json({
            success:false,
            error:"Failed to generate AI response"
        })
    }
}