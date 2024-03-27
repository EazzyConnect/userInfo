import React from 'react';
import Input from './Input';
import loginCSS from './css-files/Login.module.css';



const Login = ({ signUpTab }) => {

 const loginBtn = (e) => {
  e.preventDefault();
  console.log(`Logged In...`);
 }

 return (
  <>

   <div id={loginCSS.loginContainer}>

    <h1>Login Page</h1>

    <form action="" onSubmit={loginBtn} method='POST'>
     <Input type={"text"} id={"Email"} placeholder={"Enter Email"} />
     <Input type={"password"} id={"Password"} placeholder={"Enter Password"} />
     <button type="submit">LOGIN</button>
    </form>

    <div id={loginCSS.bottomDiv}>
     <h5>Don't have an account?</h5>
     <button id={loginCSS.btn} onClick={signUpTab}>Register here</button>
    </div>

   </div>
  </>
 )
};

export default Login;
