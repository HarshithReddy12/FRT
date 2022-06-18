import React from "react";
import doctorportalbg from '../../images/background-art.jpg'
import nLogo from '../../images/new_newest_logo.png'
import './DoctorPortal.css'
import { useState } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router";
const DoctorPortal = () =>{
    // const[Doctorlogin2,setDoctorlogedin2] = useState(true);
    // if(Doctorlogin2==false){
    //     return <Redirect to='/Logedindoctor' />
    // }
    const history = useHistory()

    return(
        <>
        <p id="back" onClick={()=>{history.push('/HospitalLogin')}}>Back</p>
        <div className="container-doctor-login-portal-change">
            <div className="subcontainer-doctor-login-portal-change">
                <div className="logo-container-doctor-login-portal-change">
                        <img src={nLogo} alt="" height="120px" id="NLOGO-smallSize"/>
                </div>
                <div className="textcontainer-doctor-login-portal-change">
                        <form >
                            <h1 id="Doc-information-login-input">Login</h1>
                            <label htmlFor="DocInfo-input-id" className="DocInfo-input-id">Doctor ID:</label> <br />
                            <input type="text" name="DocInfo-input-id" id="DocInfo-input-id" /> <br />
                             <label htmlFor="DocInfo-input-password" className="DocInfo-input-id">Doctor Password:</label> <br />
                            <input type="password" name="DocInfo-input-password" id="DocInfo-input-password" /> <br />
                             <button onClick={()=>{history.push('/DoctorPortalLogedIn')}} className="button-for-login-into-portalDoc"> Login </button>

                        </form>
                </div>
            </div>
        </div>
        {/* <div className="totalDp">
        
        <div className="doctor-loginForm">
            <div className="medicologo-Doc">
                <img src={nLogo} alt="" className="medicologo3"/>
            </div>
            <div className="formLog-doc">
                <h1>Login</h1>
                <form >
                <h2>Doctor ID:</h2>
                <input type="text" name="" id="" />
                <h2>Password</h2>
                <input type="password" name="" id="" /> <br /> <br />
                     <button onClick={()=>{history.push('/DoctorPortalLogedIn')}} > Login </button>
                </form>
                
                
            </div>
        </div>
        </div> */}
    </>
    )
}

export default DoctorPortal;