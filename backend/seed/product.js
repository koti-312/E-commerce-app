import "dotenv/config"
import path from "path"
import { fileURLToPath } from "url"
import { connectDB } from "../config/db.js"
import Product from "../models/Product.js"
import cloudinary from "../config/cloudinary.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const products = [
  {
    id: 1,
    name: "Black Graphic Printed Sweatshirt",
    image: "product1.avif",
    category: "mens",
    quality: "premium",
    price: 640
  },
  {
    id: 2,
    name: "Grey Streetwear Printed Sweatshirt",
    image: "product2.avif",
    category: "mens",
    quality: "premium",
    price: 800
  },
  {
    id: 3,
    name: "Regular Fit Hooded Puffer Jacket",
    image: "product3.avif",
    category: "mens",
    quality: "premium",
    price: 590
  },
  {
    id: 4,
    name: "Men Foil Printed Kurta",
    image: "product4.avif",
    category: "mens",
    quality: "premium",
    price: 1000
  },
  {
    id: 5,
    name: "Casual Denim Dress",
    image: "product5.avif",
    category: "mens",
    quality: "premium",
    price: 1500
  },
  {
    id: 6,
    name: "Men Regular Fit Long Kurta with Mandarin Collar",
    image: "product6.avif",
    category: "mens",
    quality: "premium",
    price: 950
  },
  {
    id: 7,
    name: "Men Striped Regular Fit Shirt",
    image: "product7.avif",
    category: "mens",
    quality: "premium",
    price: 700
  },
  {
    id: 8,
    name: "Men Regular Fit Short Kurta",
    image: "product8.avif",
    category: "mens",
    quality: "premium",
    price: 1200
  },
  {
    id: 9,
    name: "Men Regular Fit Bomber Jacket",
    image: "product9.avif",
    category: "mens",
    quality: "premium",
    price: 2000
  },
  {
    id: 10,
    name: "Short Boys Kurta",
    image: "product10.avif",
    category: "mens",
    quality: "premium",
    price: 540
  },
  {
    id: 11,
    name: "Saree",
    image: "product11.png",
    category: "womens",
    quality: "premium",
    price: 950
  },
  {
    id: 12,
    name: "Short Kurti Sharara",
    image: "product12.png",
    category: "womens",
    quality: "premium",
    price: 1000
  },
  {
    id: 13,
    name: "Lehanga",
    image: "product13.png",
    category: "womens",
    quality: "premium",
    price: 1600
  },
  {
    id: 14,
    name: "Three Piece Anarkali",
    image: "product14.png",
    category: "womens",
    quality: "premium",
    price: 870
  },
  {
    id: 15,
    name: "Frock Wedding Dress",
    image: "product15.jpg",
    category: "womens",
    quality: "premium",
    price: 1000
  },
  {
    id: 16,
    name: "Casual Denim Dress",
    image: "product16.webp",
    category: "womens",
    quality: "premium",
    price: 1300
  },
  {
    id: 17,
    name: "Full sleeves maxi with slit",
    image: "product17.png",
    category: "womens",
    quality: "premium",
    price: 3000
  },
  {
    id: 18,
    name: "Full Saree",
    image: "product18.webp",
    category: "womens",
    quality: "premium",
    price: 999
  },
  {
    id: 19,
    name: "Pink Saree with Beautiful",
    image: "product19.webp",
    category: "womens",
    quality: "premium",
    price: 899
  },
  {
    id: 20,
    name: "Maxi Dress",
    image: "product20.png",
    category: "womens",
    quality: "premium",
    price: 1489
  },
  {
    id: 21,
    name: "Men Messenger Laptop Bag with Metal Accent",
    image: "bag.png",
    category: "gadgets",
    quality: "premium",
    price: 3500
  },
  {
    id: 22,
    name: "TWS Wireless Bluetooth Earbuds-POR-2683",
    image: "airpods.png",
    category: "gadgets",
    quality: "premium",
    price: 1400
  },
  {
    id: 23,
    name: "Ultra 3nm Processor Smartwatch-SM-L705F",
    image: "watch.avif",
    category: "gadgets",
    quality: "premium",
    price: 999
  },
  {
    id: 24,
    name: "Apple iPhone 12 Pro",
    image: "iphone.jpg",
    category: "gadgets",
    quality: "premium",
    price: 60000
  },
  {
    id: 25,
    name: "Realme P3x 5G",
    image: "Realme phone.webp",
    category: "gadgets",
    quality: "premium",
    price: 13599
  },
  {
    id: 26,
    name: "Men Heavily Washed Mid-Rise Clean Jogger Jeans",
    image: "product21.avif",
    category: "mens",
    quality: "premium",
    price: 820
  },
  {
    id: 27,
    name: "Men Levis Mid-Wash Slim Fit Mid-Rise Jeans",
    image: "product22.avif",
    category: "mens",
    quality: "premium",
    price: 420
  },
  {
    id: 28,
    name: "Half Saree",
    image: "product23.png",
    category: "womens",
    quality: "premium",
    price: 670
  },
  {
    id: 29,
    name: "Frock",
    image: "product24.webp",
    category: "womens",
    quality: "premium",
    price: 900
  },
  {
    id: 30,
    name: "Large 35 L Backpack School/College Bag Office Casual Bag Waterproof Bag",
    image: "sky bag.png",
    category: "gadgets",
    quality: "premium",
    price: 900
  },
  {
    id: 31,
    name: "ASIAN Men's Dominator-03 Running Shoes",
    image: "shoes.avif",
    category: "gadgets",
    quality: "premium",
    price: 1900
  },
  {
    id: 32,
    name: "Breeze 5 25W Portable Wireless Bluetooth Speaker Within Built Mic-2098",
    image: "speaker.png",
    category: "gadgets",
    quality: "premium",
    price: 2239
  },
  {
    id: 33,
    name: "Men Colourblock Laptop Roller Case",
    image: "suitcase.png",
    category: "gadgets",
    quality: "premium",
    price: 999
  },
  {
    id: 34,
    name: "Zebronics-Cheetah Wireless Mouse",
    image: "mouse.png",
    category: "gadgets",
    quality: "premium",
    price: 8990
  },
  {
    id: 35,
    name: "Men Full-Rim Square Frames",
    image: "image.png",
    category: "gadgets",
    quality: "premium",
    price: 1000
  },
  {
    id: 36,
    name: "Men Camo Print Baseball Cap",
    image: "cap.png",
    category: "gadgets",
    quality: "premium",
    price: 420
  },
  {
    id: 37,
    name: "Floral printed shirt",
    image: "mens1.webp",
    category: "shop",
    quality: "Premium",
    price: 1200
  },
  {
    id: 38,
    name: "Multi-color striped shirt",
    image: "mens2.webp",
    category: "shop",
    quality: "Premium",
    price: 900
  },
  {
    id: 39,
    name: "Leaf printed shirt",
    image: "mens3.webp",
    category: "shop",
    quality: "Premium",
    price: 1500
  },
  {
    id: 40,
    name: "White printed casual shirt",
    image: "mens4.webp",
    category: "shop",
    quality: "Premium",
    price: 899
  }
]

const seedProducts = async () => {
  try {

    await connectDB()
    await Product.deleteMany({})
    console.log("Old products deleted")

    for (const product of products) {

      const imagePath = path.join(
        __dirname,
        "../../frontend/src/assets",
        product.image
      )

      console.log(`Uploading product ${product.id}: ${product.image}`)

      const result = await cloudinary.v2.uploader.upload(imagePath, {
        folder: "ecommerce-products"
      })

      await Product.create({
        id: product.id,
        name: product.name,
        image: result.secure_url,
        category: product.category,
        quality: product.quality,
        price: product.price
      })

      console.log(`Product ${product.id} saved to MongoDB`)
    }

    console.log("All 40 products saved successfully")
    process.exit(0)
  }
  catch (error) {
    console.log("Seed error:", error.message)
    process.exit(1)
  }
}

seedProducts()