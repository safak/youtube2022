import React from "react"

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Test Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name"/>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="password"/>
          <input type="file" />
          <button>Sign Up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;