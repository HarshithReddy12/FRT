import React from 'react';
import Docselectbg from '../images/DoctorSelectBG.png'
import './SelectDoctor.css'
import { useState } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from "react-router";

const SelectDoctor = ()=>{
     const history = useHistory();
    const[details,setDetails] = useState(true);
    const[appt,setonlineappt] = useState(true);
    if(!details){
        return <Redirect to='/Detailspage' />
    }
    if(!appt){
        return <Redirect to='/SlotBooking' />
    }
   
    return (
        <>
        <p id="back" onClick={()=>{history.push('/OnlineBooking')}}>Back</p>
        <img src={Docselectbg} alt="" className="DocTypeBg" />
        <div className="apolloHospital">
            <h1>Apollo</h1>
            <div className="doctorslist-apollo">
                <div className="doc-1">
                    <h1 className="Doc-name" onClick={()=>{history.push('/SlotBooking')}}>Ram charan</h1>
                    <h4 className="detailslink" onClick={()=>{history.push('/Detailspage')}}>Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Mehar</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Sasank</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Dinesh</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Jayanth</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Hemanth</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Sai Medha</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Pranav</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                
            </div>
        </div>
         <div className="apolloHospital">
            <h1>Times Hospital</h1>
            <div className="doctorslist-apollo">
                <div className="doc-1">
                    <h1 className="Doc-name">Krishna</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Kumar</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Lohith</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Jeevithesh</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Harshith</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Shiva</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Rishi</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                <div className="doc-1">
                    <h1 className="Doc-name">Nandha</h1>
                    <h4 className="detailslink">Details</h4>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default SelectDoctor