import React from 'react';
import Vcall from '../images/VC.png'
import './TypeOfOnline.css'
import Acall from '../images/ACall.png'
import { useState } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from "react-router";
const TypeOfOnline = ()=>{
     const history = useHistory();
    
    return(
        <>
        <p id="back" onClick={()=>{history.push('/appointment')}}>Back</p>
        <div className="typeOfonlinemodee">
            <div className="videocalltype">
                

                    <img src={Vcall} alt="" />
                     <br />
                    <button onClick={()=>{history.push('/OnlineBooking')}} id="videocall-button-change">Video call</button>
                
            </div>
            <div className="audiocalltype">
                        
                        <img src={Acall} alt="" /> <br />
                        <button onClick={()=>{history.push('/OnlineBooking')}} id="audiocall-button-change">Audio call</button>

            
            </div>
        </div>
        </>
    )
}

export default TypeOfOnline