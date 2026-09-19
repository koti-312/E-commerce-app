import cloudinary from "cloudinary"

cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.Cloud_API_KEY,
  api_secret: process.env.Cloud_API_SECRET
})

export default cloudinary