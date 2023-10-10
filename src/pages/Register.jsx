import React from "react"

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">IMS Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name"/>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="password"/>
          <input style={{display:"none"}} type="file" id="file"/>
          <label htmlFor="file">
          asdas
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;