import Product from "../models/Product.js"

export const addProduct = async (req, res) => {
    const products = await Product.find({})
    let id

    if (products.length > 0) {
        const lastProduct = products[products.length - 1]
        id = lastProduct.id + 1
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

    const savedProduct = await product.save()
    res.json({
        success: true,
        name: savedProduct.name
    })
}

export const removeProduct = async (req, res) => {

    const removedProduct = await Product.findOneAndDelete({
        id: req.body.id
    })
    res.json({
        success: true,
        name: removedProduct?.name
    })
}

export const allProducts = async (req, res) => {

    const products = await Product.find({})
    res.json(products)
}

export const popularProducts = async (req, res) => {

    const products = await Product.find({
        category: { $in: ["mens", "womens"] }
    })

    const popular = products.slice(0, 8)
    res.json(popular)
}

export const uploadProduct = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            })
        }

        const imageUrl = req.file.path
        res.status(200).json({
            success: true,
            image_url: imageUrl
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}