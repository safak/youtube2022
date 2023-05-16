import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";


const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  });
  
  const [err, setErr] = useState(null);

  const handleChange = (e) =>{
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  };
  
  const handleClick = async (e)=>{
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/auth/register", inputs);
      alert("Register has been successful")
    } catch (err) {
      setErr(err.response.data);
      alert("Username or Email already exists!")
    }
  };  
  console.log(err)
  
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const changeUsername = (e) => {
  //   const value = e.target.value
  //   setUsername(value)
  // }
  // const changeEmail = (e) => {
  //   const value = e.target.value
  //   setEmail(value)
  // }
  // const changePassword = (e) => {
  //   const value = e.target.value
  //   setPassword(value)
  // }


  return (
    <div className="register">
     
      <div className="card">
      
        <div className="form">
        {/* <p className="modal">{err && err}</p> */}
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username"
            onChange={handleChange} name="username"/>
            <input type="email" placeholder="Email"
            onChange={handleChange} name="email"/>
            <input type="password" placeholder="Password"
            onChange={handleChange} name="password"/>
            {/* <input type="password" placeholder="Repeat Password"
            value={password} onChange={changePassword}/> */}

            {/* {err && err} */}
            <button onClick={handleClick}>Register</button>
            <p className="regist">Sudah punya Akun? .
              <Link to="/login">Login
                  {/* <button className="regist">Register</button> */}
              </Link>
            </p>
          </form>
        </div>
       
      </div>


      {/* <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document"></div>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{err && err}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default Register;
