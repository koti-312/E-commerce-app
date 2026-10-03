import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./Login.css"
import { loginUser } from "../services/api"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [serverError, setServerError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await loginUser({ email, password })
      if (data.success) {
        setEmail("")
        setPassword("")

        localStorage.setItem("auth-token", data.token)
        navigate("/")
      }
      else {
        setServerError(data.errors)
      }
    }
    catch (error) {
      setServerError("Something went wrong. Please try again")
    }
  }

  return (
    <main className="logins">
      <div className="logins-container">
        <h1>Welcome Back 👋</h1>

        <form className="logins-fields" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required />

          <button type="submit">Login</button>
        </form>

        {serverError && (
          <p className="server-error"> {serverError}</p>
        )}

        <p className="login-text">Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

        <div className="logins-agree">
          <input type="checkbox" required />
          <p className="box">
            By continuing, you agree to our terms of service & privacy policy.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Login