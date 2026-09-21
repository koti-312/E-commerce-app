import Users from "../models/User.js"

export const addToCart = async (req, res) => {
    
  try {
    const { itemId } = req.body
    const userData = await Users.findById(req.user.id)

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      })
    }

    if (!userData.cartData) {
      userData.cartData = {}
    }

    userData.cartData[itemId] = (userData.cartData[itemId] || 0) + 1

    const updatedUser = await Users.findByIdAndUpdate(
      req.user.id,
      {
        cartData: userData.cartData
      },
      { new: true }
    )

    res.json({
      success: true,
      message: "Added to cart",
      cartData: updatedUser.cartData
    })
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product to cart"
    })
  }
}

export const removeFromCart = async (req, res) => {

  try {
    const { itemId } = req.body
    const userData = await Users.findById(req.user.id)

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      })
    }

    if (!userData.cartData) {
      userData.cartData = {}
    }

    if (userData.cartData[itemId] > 0) {
      userData.cartData[itemId] -= 1
    }

    const updatedUser = await Users.findByIdAndUpdate(
      req.user.id,
      {
        cartData: userData.cartData
      },
      { new: true }
    )

    res.json({
      success: true,
      message: "Removed from cart",
      cartData: updatedUser.cartData
    })
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to remove product from cart"
    })
  }
}