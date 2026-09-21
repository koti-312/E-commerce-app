import jwt from "jsonwebtoken"

const fetchUser = async (req, res, next) => {

    const token = req.header("auth-token")
    if (!token) {
        return res.status(401).json({
            errors: "Please authenticate using valid token"
        })
    }

    try {
        const data = jwt.verify(token, "secret_ecom")
        req.user = data.user
        next()
    }
    catch (error) {
        return res.status(401).json({
            errors: "Please authenticate using valid token"
        })
    }
}

export default fetchUser