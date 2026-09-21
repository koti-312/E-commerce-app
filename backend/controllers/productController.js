import Product from "../models/Product.js"

export const addProduct = async (req, res) => {
    let products = await Product.find({})
    let id

    if (products.length > 0) {
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id + 1
    }
    else {
        id = 1
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        quality: req.body.quality,
        price: req.body.price
    })
    console.log(product)
    await product.save()
    console.log("Saved")

    res.json({
        success: true,
        name: req.body.name
    })
}

export const removeProduct = async (req, res) => {
    await Product.findOneAndDelete({
        id: req.body.id
    })

    console.log("Removed")
    res.json({
        success: true,
        name: req.body.name
    })
}

export const allProducts = async (req, res) => {

    let products = await Product.find({})
    console.log("All products fetched")
    res.send(products)
}

export const popularProducts = async (req, res) => {
    let products = await Product.find({
        category: {
            $in: ["mens", "womens"]
        }
    })

    let popular = products.slice(0, 8)
    console.log("Popular Fetched")
    res.send(popular)
}

export const uploadProduct = async (req, res) => {
    try {
        console.log("Upload controller called")
        console.log("req.file:", req.file)
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            })
        }
        res.status(200).json({
            success: true,
            image_url: req.file.path
        })
    }
    catch (error) {
        console.log("Upload error:", error.message)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}