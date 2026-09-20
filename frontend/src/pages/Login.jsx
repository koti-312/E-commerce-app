import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { loginUser, signupUser } from '../services/api'

const Login = () => {

  const [state, setstate] = useState("Login")
  const [error, setError] = useState({})
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const navigate = useNavigate()

  const validateform = () => {
    let newError = {}

    if (state === "Sign Up" && !formData.username) {
      newError.username = "Name is required!"
    }
    if (!formData.email) {
      newError.email = "Email is required"
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Enter valid email!"
    }
    if (!formData.password) {
      newError.password = "Password is required!"
    }
    else if (formData.password.length < 6) {
      newError.password = "Password must be at least 6 characters!"
    }
    setError(newError)
    return Object.keys(newError).length === 0
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateform())
      return
    if (state === "Login") {
      await login()
    } else {
      await signup()
    }

    setFormData({
      username: "",
      email: "",
      password: ""
    })
    setError({})
  }

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [serverError, setServerError] = useState("")

  const login = async () => {
    
    try {
      const data = await loginUser(formData)
      if (data.success) {
        localStorage.setItem('auth-token', data.token)
        navigate("/")
      } else {
        setServerError(data.errors)
      }
    }
    catch (err) {
      setServerError("Something went wrong. Please try again.")
    }
  }

  const signup = async () => {
    try {
      const data = await signupUser(formData)
      if (data.success) {
        localStorage.setItem('auth-token', data.token)
        navigate("/")
      }
      else {
        setServerError(data.errors)
      }
    }
    catch (err) {
      setServerError("Something went wrong. Please try again.")
    }
  }

  return (

    <div className="logins" >
      <div className="logins-container">
        <h1>{state}</h1>

        <form className="logins-fields" onSubmit={handleSubmit}>

          {state === "Sign Up" ?
            <>
              <input name='username'
                value={formData.username}
                type="text"
                placeholder="Your Name"
                onChange={changeHandler} />
              {error.username && <span className='inputError-msg'>{error.username}</span>}
            </>
            : <></>
          }

          <input name='email'
            value={formData.email}
            type="email"
            placeholder="Email Address"
            onChange={changeHandler} />
          {error.email && <span className='inputError-msg'>{error.email}</span>}

          <input name='password'
            value={formData.password}
            type="password"
            placeholder="Password"
            onChange={changeHandler} />
          {error.password && <span className='inputError-msg'>{error.password}</span>}

          <button>Continue</button>

        </form>

        {
          serverError && <p style={{ color: "red", fontSize: "16px" }}>
            {serverError}
          </p>
        }

        {
          state === "Sign Up" ?
            <p className="login-text">
              Already have an account?
              <span onClick={() => { setstate("Login") }}> Login here</span>
            </p> : <p className="login-text">Create an account?
              <span onClick={() => { setstate("Sign Up") }}> Click here</span></p>}

        <div className="logins-agree">
          <input type="checkbox" />
          <p className='box'>By continuing, you agree to our terms of service & privacy policy</p>
        </div>
      </div>
    </div >
  )
}

export default Login