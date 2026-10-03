import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {

    const token = req.header("auth-token")
    if (!token) {
        return res.status(401).json({
            success:false,
            message: "Please authenticate using valid token"
        })
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data.user
        next()
    }
    catch (error) {
        return res.status(401).json({
            success:false,
            message: "Please authenticate using valid token"
        })
    }
}

export default authMiddleware