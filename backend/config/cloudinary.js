import cloudinary from "cloudinary"
import "dotenv/config"

console.log("Cloud Name:", process.env.Cloud_name)
console.log("API Key exists:", !!process.env.Cloud_API_KEY)
console.log("API Secret exists:", !!process.env.Cloud_API_SECRET)

cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.Cloud_API_KEY,
  api_secret: process.env.Cloud_API_SECRET
})

export default cloudinary