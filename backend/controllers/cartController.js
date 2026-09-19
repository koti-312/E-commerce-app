import Users from "../models/User.js"

export const addToCart = async (req, res) => {
    console.log("Added", req.body.itemId)

    let userData = await Users.findOne({
        _id: req.user.id
    })

    userData.cartData[req.body.itemId] += 1

    await Users.findOneAndUpdate(
        {
            _id: req.user.id
        },
        {
            cartData: userData.cartData
        }
    )

    res.send("Added")
}

export const removeFromCart = async (req, res) => {
    console.log("removed", req.body.itemId)

    let userData = await Users.findOne({
        _id: req.user.id
    })

    if (userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] -= 1
    }

    await Users.findOneAndUpdate(
        {
            _id: req.user.id
        },
        {
            cartData: userData.cartData
        }
    )

    res.send("Removed")
}

