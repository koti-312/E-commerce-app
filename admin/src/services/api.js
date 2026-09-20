const API_URL=import.meta.env.VITE_API_URL || "http://localhost:4000/api"

export const uploadProductImage = async (formData) => {
  const response = await fetch(`${API_URL}/products/upload`, {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    body: formData
  })
  const data = await response.json()
  return data
}

export const addProduct = async (product) => {
  const response = await fetch(`${API_URL}/products/addproduct`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  const data = await response.json()
  return data
}

export const getAllProducts = async () => {
  const response = await fetch(`${API_URL}/products/allproducts`)
  const data = await response.json()
  return data
}

export const removeProduct = async (id) => {
  const response = await fetch(`${API_URL}/products/removeproduct`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id })
  })
  const data = await response.json()
  return data
}

export const getImageUrl = (path) => {

  if (!path) return null
  if (path.includes('cloudinary')) return path
  if (path.includes('static/media')) return path
  return `${API_URL}${path}`
}