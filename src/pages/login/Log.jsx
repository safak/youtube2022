import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const navigate = useNavigate();
    // const [errors, setErrors] = useState({})
    // const [backendError, setBackendError] = useState([])

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // setErrors(Validation(values));
    //     // const err = Validation(values); setErrors(err);         
    //     // if(err.email === "" && err.password === "") 
    //     // {          
    //     axios.post('http://localhost:3001/login', values)
    //     .then(res => {
    //         if(res.data.login) {
    //             navigate('/home')
    //         } else {
    //             alert("WRONG EMAIL OR PASSWORD!")
    //         }  
    //         console.log(res);    
    //     })
    //     .catch(err => console.log(err));    
    // }


    // axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault();
        // setErrors(Validation(values));
        // const err = Validation(values); setErrors(err);         
        // if(err.email === "" && err.password === "") 
        // {   
        axios.post('http://localhost:3001/login', values)
        .then(res => {
            if(res.data.login) {
                alert("WRONG EMAIL OR PASSWORD!")
            } else {
                navigate('/home')
            }  
            console.log(res);    
        })
        .catch(err => console.log(err));    
    }
        
        



        // axios.post('http://locahost:3001/login', values)
        // .then(res => {
        //     if(res.data.errors) {                    
        //         setBackendError(res.data.errors);                
        //     } else {                    
        //         setBackendError([]);                    
        //         if(res.data === "Success") {                        
        //             navigate('/home');                    
        //         } else {                    
        //             alert("No record existed");                    
        // }         


    // const err = Validation(values); setErrors(err);         
    //     if(err.email === "" && err.password === "") {            
    //         axios.post('http://locahost:3001/login', values)
    //         .then(res => {
    //             if (res.data === "Success") {
    //                 navigate('/home');
    //             } else {
    //                 alert("No Record existed")
    //             }
    //         })
    //         .catch(err => console.log(err));
    //     } 
        
        // const err = Validation(values); setErrors(err);         
        // if(err.email === "" && err.password === "") {            
        //     axios.post('http://locahost:3001/login', values)
        //     .then(res => {
        //         if(res.data.errors) {                    
        //             setBackendError(res.data.errors);                
        //         } else {                    
        //             setBackendError([]);                    
        //             if(res.data === "Success") {                        
        //                 navigate('/home');                    
        //             } else {                        
        //                 alert("No record existed");                    
        //     }                
        // }
        //     })
        //     .catch(err => console.log(err));
        // } 




    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <h2 className='d-flex justify-content-center'>LOGIN</h2>
            {/* {                
            backendError ? backendError.map( e => (                    
            <p className='text-danger'>{e.msg}</p>                 
            )) : 
            <span></span>            
            }   */}
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' onChange={handleInput}
                        name='email' className='form-control rounded-0'/>
                        {/* {errors.email && <span className='text-danger'> {errors.email}</span>} */}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' onChange={handleInput} 
                        name='password' className='form-control rounded-0'/>
                        {/* {errors.password && <span className='text-danger'> {errors.password}</span>} */}
                    </div>

                    <button type='submit' className='btn btn-success w-100'>Log in</button>
                    <p></p> 
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}


export default Login;