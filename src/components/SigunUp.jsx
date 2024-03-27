import React, { useState } from 'react';
import Input from './Input';
import signUpCSS from './css-files/SignUp.module.css';



const SignUp = ({ logInTab }) => {

 const [userDetails, setUserDetails] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_Password: ""
 })

 const signUpBtn = (e) => {
  e.preventDefault();
  console.log(`Signing Up...`);
  console.log(userDetails);
 };

 const handleChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  setUserDetails((prevData) => ({
   ...prevData,
   [name]: value
  }))
 }

 const authCheck = () => {
  if (
   userDetails.firstName === "" ||
   userDetails.lastName === "" ||
   userDetails.email === "" ||
   userDetails.password === "" ||
   userDetails.confirm_Password === ""
  ) {
   alert("Provide all fields")
  }

  if (userDetails.password !== userDetails.confirm_Password) {
   alert("Password does not match")
  }

  if (userDetails.password.length < 6) {
   alert("Password length is less than 6 characters")
  } else {
   alert("Registration Successful")
   location.reload()
  }

 }

 return (
  <>

   <div id={signUpCSS.signUpContainer}>

    <h1>Sign-up Page</h1>

    <form action="" method='POST' onSubmit={signUpBtn}>
     <Input type={"text"} id={"FirstName"} placeholder={"Enter First Name"} value={userDetails.firstName} name={"firstName"} onchange={handleChange} />
     <Input type={"text"} id={"LastName"} placeholder={"Enter Last Name"} value={userDetails.lastName} name={"lastName"} onchange={handleChange} />
     <Input type={"email"} id={"Email"} placeholder={"Enter Email"} value={userDetails.email} name={"email"} onchange={handleChange} />
     <Input type={"password"} id={"Password"} placeholder={"Enter Password"} value={userDetails.password} name={"password"} onchange={handleChange} />
     <Input type={"password"} id={"Confirm-Password"} placeholder={"Enter Password"} value={userDetails.confirm_Password} name={"confirm_Password"} onchange={handleChange} />
     <button type="submit" onClick={authCheck}>SIGN UP</button>
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
