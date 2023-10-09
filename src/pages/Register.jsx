import React from 'react';

const Register = () => {
  return (
    <div className='formContainer'>
     <div className='formWrapper'>
        <span className='logo'>Test Chat</span>
        <span className='title'>Register</span>
        <form>
            <input type='text' placeholder='Name'/>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <input type='file' />
            <button>Sign up</button>
        </form>
        <p>You already have an account? Login</p>
     </div>
    </div>
  );
};

export default Register;