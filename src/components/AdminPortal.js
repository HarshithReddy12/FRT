import React from "react";
import DocStrength from '../images/covid/DoctorStrengthHos.png'
import PatientStrength from '../images/covid/PatientStrengthHos.png'
import './AdminPortal.css'
import Draggable from 'react-draggable'; // The default


const AdminPortal = () =>{
    
    return(
        <>
        <div className="align-right-Strength-admin">
            <div>
        <img src={DocStrength} alt="" id="short-admin-displayPhoto" />
        <h1 id="moveSomeRightAlign-Admin">Docter Strength</h1>
        </div>
        <div>
        <img src={PatientStrength} alt="" id="short-admin-displayPhoto"/>
        <h1 id="moveSomeRightAlign-Admin">Patient Strength</h1>
        </div>
        
        </div>
        <br /><br />
        <h1>SET LIST:</h1>
    
        <div className="line1-admin">
            <h1></h1>
        </div> <br /><br />
        <div className="INCREMENTpAGE_dETAILS">
            <div className="box1-adminAssign-set">
            <h2>Pair set</h2>
        </div>
        <div className="box1-adminAssign-set" id="moveSomewhat">
            <h2>Pair set</h2>
        </div>
        <div className="box1-adminAssign-set" id="moveSomewhat1">
            <h2>Pair set</h2>
        </div>
         <div className="box1-adminAssign-set" id="moveSomewhat2">
            <h2>Pair set</h2>
        </div>
         <div className="box1-adminAssign-set" id="moveSomewhat3">
            <h2>Pair set</h2>
        </div>
            <div className="borderKeep-Main-Admin">
            <Draggable>
                <div id="cursorPointer-ASSIGNING">
                <h1>Dr.Jeevitesh</h1>
                </div>
            </Draggable>
            
            <Draggable>
                <div id="cursorPointer-ASSIGNING">
                <h1>Dr.Harshith</h1>
                </div>
            </Draggable>
            <Draggable>
                <div id="cursorPointer-ASSIGNING">
                <h1>Dr.Lohith</h1>
                </div>
            </Draggable>
            <Draggable>
                <div id="cursorPointer-ASSIGNING">
                <h1>Dr.Yuva</h1>
                </div>
            </Draggable>
            <Draggable>
                <div id="cursorPointer-ASSIGNING">
                <h1>Dr.Raghu</h1>
                </div>
            </Draggable>
        </div>
           <h1>Patient List</h1>
                  <div className="line1-admin">
            <h1></h1>
        </div> <br /><br />
            <Draggable>
                <div id="cursorPointer-ASSIGNING">
                <h2>Harsha</h2>
                </div>
            </Draggable>
            
            <Draggable>
                <div id="cursorPointer-ASSIGNING">
                <h2>Dinesh</h2>
                </div>
            </Draggable>
            <Draggable>
                <div id="cursorPointer-ASSIGNING">
                <h2>Rishi</h2>
                </div>
            </Draggable>
            <Draggable>
                <div id="cursorPointer-ASSIGNING">
                <h2>Jayanth</h2>
                </div>
            </Draggable>
            <Draggable>
                <div id="cursorPointer-ASSIGNING">
                <h2>Mehar</h2>
                </div>
            </Draggable>
        </div>
        
        
        </>
    )
}

export default AdminPortal;