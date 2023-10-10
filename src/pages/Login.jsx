import React from "react"
import add from "../img/image-upload-icon.png"

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">IMS Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="password"/>
          <button>Sign In</button>
        </form>
        <p>Don't have an account? Register!</p>
      </div>
    </div>
  );
};

export default Login;