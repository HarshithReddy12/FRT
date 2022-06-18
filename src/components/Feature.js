import React from 'react'
import './Feature.css'
import building from '../images/mainphone.png'
import { useState } from 'react'
import { Redirect } from 'react-router'
import { useHistory } from "react-router";

const Feature =()=>{
    const history = useHistory();
        
        return(
            <>
            <div className="total-mainpage">
                <div className="topRow">
                <div className="klu-photo">
                    <h2 id="klu-photo-text-font-change">MEDICO <br></br>  Healthcare app </h2>
                    <p>A small change can bring a big difference</p>
                </div>
                <div className="hosbuild-pic">
                    <img src={building} alt="" className="Mainpic"/>
                    <div className="colorbg"></div>
                </div>
                </div>
            </div>
            <div className="functionality">
                
                    <h1>Our Features</h1>

                    <div className="functionality-options">
                        <div className="home-remidies">
                            <div className="center-heading-feature-1">
                                    <h3><b>Home Remidies</b></h3> 
                            </div>
                                     

                            <div className="btn-click">
                                <button className="btnClick" id="features-btn-change" onClick={()=>{history.push('/homeremidies')}} >Click here</button>    
                            </div>                
                        </div>
                        
                        <div className="reminder">
                              <div className="center-heading-feature-1">
                                    <h3 ><b>Reminders</b></h3> 
                            </div>
                            <div className="btn-click">
                                <button className="btnClick" id="features-btn-change" onClick={()=>{history.push('/reminders')}} >Click here</button>    
                            </div>  
                        </div>
                        <div className="appointment">
                              <div className="center-heading-feature-1">
                                    <h3><b>Appointment</b></h3> 
                            </div>
                            <div className="btn-click">
                                <button className="btnClick" id="features-btn-change" onClick={()=>{history.push('/appointment')}} >Click here</button>    
                            </div>  
                        </div>
                        <div className="chat">
                            <div className="center-heading-feature-1">
                                    <h3><b>Chat</b></h3> 
                            </div>
                            <div className="btn-click">
                                <button className="btnClick"id="features-btn-change"  onClick={()=>{history.push('/chat')}}>Click here</button>    
                            </div>  
                        </div>
                        <div className="medicines-book">
                             <div className="center-heading-feature-1">
                                    <h3><b>Book medicine</b></h3> 
                            </div>
                            <div className="btn-click2">
                                <button className="btnClick2"id="features-btn-change"  onClick={()=>{history.push('/medicine')}}>Click here</button>    
                            </div>  
                        </div>
                    </div>
            </div>
             <h1>Important features</h1>
            <div className="mainThings">
                <div className="containerMainthings">
                       <div className="track" onClick={()=>{history.push('/Track')}}>
                            <h1 id="t2"><b>Track</b></h1>
                       </div>
                       
                       <div className="Lab"  onClick={()=>{history.push('/Labpage')}}>
                            <h1 id="t1"><b>Lab</b></h1>
                       </div>
                       <div className="Admitted" onClick={()=>{history.push('/HospitalLogin')}}>
                            <h1 id="t1"><b>Admitted</b></h1>
                       </div>
                       <div className="COVID" onClick={()=>{history.push('/Corona')}}>
                            <h1 id="t1"><b>Covid</b></h1>
                       </div>
                       
                </div>
                
            </div>
            <div className="borderchangeon-Hoverbro">
            <div className="womenportal-separate" onClick={()=>{history.push('/WomenPortal')}}>
                <div className="women">
                    <div  >
                           <h1 id="text-women"><b>WOMEN PORTAL</b></h1>
                           </div>
                </div>
            </div>
            </div>
            <div className="coustomerHelp">
                
                <div className="bookTablets" onClick={()=>{history.push('/medicine')}}>
                    <h1 id="inside-box-text">Book Tablets</h1>
                </div>
                <div className="bookTablets">
                    <h1 id="inside-box-text">Read article</h1>
                </div>
                <div className="bookTablets">
                    <h1 id="inside-box-text">Customer care</h1>
                </div>
            </div>
            {/* <div className="map">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122450.18377022298!2d80.59187995918313!3d16.44674000789283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb03f7043513%3A0x835a2903e2b4b1e1!2sApollo%20Diagnostics!5e0!3m2!1sen!2sin!4v1637406848091!5m2!1sen!2sin" 
         width="600" 
         height="450" 
         style="border:0;" 
         allowfullscreen="" 
         loading="lazy" id="hello">
        </iframe>
        </div> */}

            </>
        )
}

export default Feature