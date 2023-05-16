import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";
import "./login.scss";


const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    // email:"",
    password:"",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
      alert("Incorrect username and password!")
    }
  };


  return (
    <div className="login">
      <div className="card">
    
        <div className="form">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" className="d-grid gap-2 col-6 mx-auto"
            onChange={handleChange} name="username"/>
            <input type="password" placeholder="Password"
            onChange={handleChange} name="password"/>
            <p>
            <Link to="/forgot">Lupa Password?
            </Link>
            </p>

            <button onClick={handleLogin}>Login</button>
            <p className="regist">Belum punya Akun? .
            <Link to="/register">Register
                {/* <button className="regist">Register</button> */}
            </Link>
            </p> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
