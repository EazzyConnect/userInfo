import React from 'react';
import Input from './Input';
import signUpCSS from './css-files/SignUp.module.css';



const SignUp = ({ logInTab }) => {

 const signUpBtn = (e) => {
  e.preventDefault();
  console.log(`Signing Up...`);
 };

 return (
  <>

   <div id={signUpCSS.signUpContainer}>

    <h1>Sign-up Page</h1>

    <form action="" method='POST' onSubmit={signUpBtn}>
     <Input type={"text"} id={"FirstName"} placeholder={"Enter First Name"} />
     <Input type={"text"} id={"LastName"} placeholder={"Enter Last Name"} />
     <Input type={"email"} id={"Email"} placeholder={"Enter Email"} />
     <Input type={"password"} id={"Password"} placeholder={"Enter Password"} />
     <Input type={"password"} id={"Confirm-Password"} placeholder={"Enter Password"} />
     <button type="submit">SIGN UP</button>
    </form>

    <div id={signUpCSS.bottomDiv}>
     <h5>Already have an account?</h5>
     <button id={signUpCSS.btn} onClick={logInTab}>Sign in here</button>
    </div>

   </div>

  </>
 )
};

export default SignUp;
