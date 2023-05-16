import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./forgot.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        {/* <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div> */}
        <div className="right">
          <h1>Forgot Password</h1>
          <form>
          <input type="email" placeholder="Email" />
            {/* <input type="password" placeholder="Password" /> */}
            
            <button >Send verification</button>

            <Link to="/login">
              <button className="log">Kembali</button>
            </Link>
            
            {/* <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link> */}

              
          
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
