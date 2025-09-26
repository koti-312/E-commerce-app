import React, { useState } from 'react';
import './Login.css';

const Login = () => {

  const [state, setstate] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;
    await fetch('https://e-commerce-app-backend-31uv.onrender.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)
    }

  }
  const signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch('https://e-commerce-app-backend-31uv.onrender.com/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)

    }

  }


  return (
    <div className="logins" >
      <div className="logins-container">
        <h1>{state}</h1>

        <div className="logins-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>

        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up" ? <p className="login-text">Already have an account? <span onClick={() => { setstate("Login") }}>Login here</span></p>
          : <p className="login-text">Create an account? <span onClick={() => { setstate("Sign Up") }}>Click here</span></p>}

        <div className="logins-agree">
          <input type="checkbox" />
          <p className='box'>By continuing, you agree to our terms of service & privacy policy</p>
        </div>
      </div>
    </div >
  );
};

export default Login;
