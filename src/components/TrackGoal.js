import React from "react";
import './measureGoals.css'
import {useHistory} from 'react-router-dom'
const TrackGoal = ()=>{
    const history = useHistory();
        return(
            <>
            <p id="back" onClick={()=>{history.push('/Profile')}}>Back</p>
            <div className="covertotalgoals">
                <h1 id="track-pastRecord"><b>Track Records:</b></h1>
                 <h3 id="record10">10 Records</h3>
        
                  <div className="trackdetails">
                <div className="contrackgoal1">
                    <h1>Today:</h1>
                    <div className="harshavardhan">
                    <div className="distravelled">
                            <h1>3.5</h1>
                            <h3>Kilometers</h3>
                    </div>
                    <div className="timetakenTotravel">
                        <h1>49</h1>
                        <h3>Minutes</h3>

                    </div>
                    </div>
                </div>
                 <div className="contrackgoal1" id="secondCSE">
                    <h1>Yesterday:</h1>
                    <div className="harshavardhan">
                    <div className="distravelled">
                            <h1>4.78</h1>
                            <h3>Kilometers</h3>
                    </div>
                    <div className="timetakenTotravel">
                        <h1>70</h1>
                        <h3>Minutes</h3>

                    </div>
                    </div>
                </div>
                 <div className="contrackgoal1" id="thirdCSE">
                    <h1>20<sup>th</sup> November:</h1>
                    <div className="harshavardhan">
                    <div className="distravelled">
                            <h1>2</h1>
                            <h3>Kilometers</h3>
                    </div>
                    <div className="timetakenTotravel">
                        <h1>19</h1>
                        <h3>Minutes</h3>

                    </div>
                    </div>
                </div>
                 <div className="contrackgoal1" id="fourthCSE">
                    <h1>19<sup>th</sup> November:</h1>
                    <div className="harshavardhan">
                    <div className="distravelled">
                            <h1>3.5</h1>
                            <h3>Kilometers</h3>
                    </div>
                    <div className="timetakenTotravel">
                        <h1>49</h1>
                        <h3>Minutes</h3>

                    </div>
                    </div>
                </div>
            </div>
            </div>
           
            </>
        )
}

export default TrackGoal;