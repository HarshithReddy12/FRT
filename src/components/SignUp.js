import React,{useState} from "react";
import './Signup.css'
import SignupPic from '../images/SignUp.png'
import Form from 'react-bootstrap/Form';
import {useHistory} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import bgPencil from '../images/PencelSignupbg.jpg'
import  Indexpage from './Indexpage'
const SignUp = ({setSignup})=>{
  
  
  
//   const submitHandler = ()=>{
//     const addUser = ({username, password}) => {
//   const newArr = [...userList, {name: username, pwd: password}]
//   setUserList(newArr)
// // }
//   }
  const history= useHistory();
    return (
      <>

    
        <div className="signupMedica">
            <h1 id="sign-up-title">Login In/SignUp</h1>
            <div className="container-signup">
                
                <div className="signupLogo">
                    <img src={SignupPic} alt="Pic"  />
                </div>
                <div className="form">
                {/* <Form onSubmit={submitHandler}> */}
                <Form>
  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id="hv-title">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" id="enter-Email"/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id="hv-title">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" id="enter-Email"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">

  </Form.Group> */}
  <div className="as-singup-login">
  <Indexpage />
  </div>
          <Button variant="primary" id="loginButton-otp" onClick={() => {
    alert("Succssfully Loged In");
    alert("Fill the Profile Page!!!");

  setSignup(true)

  history.push('/features')
}}>Login</Button>{' '}

  
</Form>

</div>
            </div>
        </div>
     
        </>
    )
}

export default SignUp