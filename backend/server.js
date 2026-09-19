import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import {connectDB} from "./config/db.js"
import productRoute from "./routes/productRoute.js"
import userRoute from "./routes/userRoute.js"
import cartRoute from "./routes/cartRoute.js"


const port = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())

//MongoDB connection
connectDB()

app.use("/api/products", productRoute)
app.use("/api/users", userRoute)
app.use("/api/cart", cartRoute)


app.get("/", (req, res) => {
  res.send("Express App is Running")
})


app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on http://localhost${port}` )
  } else {
    console.log("Error:",error)
  }
})