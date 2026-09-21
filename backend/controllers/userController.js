import jwt from "jsonwebtoken"
import Users from "../models/User.js"

export const signup = async (req, res) => {
    try {
        const checkUser = await Users.findOne({
            email: req.body.email
        })

        if (checkUser) {
            return res.status(400).json({
                success: false,
                errors: "Existing user found with same email address"
            })
        }

        const cart = {}
        for (let i = 0; i < 300; i++) {
            cart[i] = 0
        }

        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart
        })

        const savedUser = await user.save()
        const data = {
            user: {
                id: savedUser.id
            }
        }

        const token = jwt.sign(data, "secret_ecom")
        res.json({
            success: true,
            token
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            errors: "Something went wrong"
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await Users.findOne({
            email: req.body.email
        })

        if (!user) {
            return res.json({
                success: false,
                errors: "Wrong Email Id"
            })
        }

        const passCompare = req.body.password === user.password
        if (!passCompare) {
            return res.json({
                success: false,
                errors: "Wrong Password"
            })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const token = jwt.sign(data, "secret_ecom")
        res.json({
            success: true,
            token
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            errors: "Something went wrong"
        })
    }
}