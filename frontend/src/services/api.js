const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api"

const getAuthHeaders = () => ({

  "auth-token": `${localStorage.getItem('auth-token')}`,
  "Content-Type": "application/json"
})

export const loginUser = async (formData) => {

  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })

  const data = await response.json()
  return data
}

export const signupUser = async (formData) => {

  const response = await fetch(`${API_URL}/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })

  const data = await response.json()
  return data
}

export const addToCart = async (itemId) => {
    
  const response = await fetch(`${API_URL}/cart/addtocart`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ itemId })
  })

  const data = await response.json()
  return data
}

export const removeFromCart = async (itemId) => {

  const response = await fetch(`${API_URL}/cart/removefromcart`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ "itemId": itemId })
  })

  const data = await response.json()
  return data
}

export const getPopularProducts = async () => {

  const response = await fetch(`${API_URL}/products/popular`)
  const data = await response.json()
  return data
}

export const getImageUrl = (path) => {

  if (!path) return null
  if (path.includes('cloudinary')) return path
  if (path.includes('static/media')) return path
  return `${API_URL}${path}`
}

export default API_URL