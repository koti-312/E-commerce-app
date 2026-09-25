import jwt from "jsonwebtoken"
import Users from "../models/User.js"
import bcrypt from "bcrypt"


export const signup = async (req, res) => {

    try {
        const { username, email, password } = req.body

        const checkUser = await Users.findOne({ email })
        if (checkUser) {
            return res.status(400).json({
                success: false,
                message: "Existing user found with same email address"
            })
        }

        const hashedpassword = await bcrypt.hash(password, 10)

        const cart = {}
        for (let i = 0; i < 300; i++) {
            cart[i] = 0
        }

        const userdata = new Users({
            name: username,
            email: email,
            password: hashedpassword,
            cartData: cart
        })
        const saveUser = await userdata.save()

        const data = {
            user: {
                id: saveUser.id
            }
        }

        const token = jwt.sign(
            data,
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.status(201).json({
            success: true,
            token
        })
    }
    catch (error) {
        console.log("Error:", error.message)
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

export const login = async (req, res) => {

    try {
        const { email, password } = req.body

        const checkUser = await Users.findOne({ email })

        if (!checkUser) {
            res.status(400).json({
                success: false,
                message: "Wrond email Id"
            })
        }

        const comparePassword = await bcrypt.compare(password, checkUser.password)
        if (!comparePassword) {
            res.status(400).json({
                success: false,
                message: "Invaild password"
            })
        }

        const data = {
            user: {
                id: checkUser.id
            }
        }

        const token = jwt.sign(
            data, process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.status(200).json({
            success: true,
            token
        })
    }
    catch (error) {
        console.log("Error:", error.message)
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}