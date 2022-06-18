import React from 'react';
import {useHistory} from 'react-router-dom'
import './TrackGoals.css'
import Carousel from 'react-bootstrap/Carousel';
import WeightTrack from '../images/covid/Weight-Track.png'
import Walk from '../images/covid/TrackWalk.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Greenarrow from '../images/covid/GreenArrow (2).png'
const TrackGoals = () => {
        const history = useHistory();

        const now = 60;
        const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
        return(
            <>
             <p id="back" onClick={()=>{history.push('/Profile')}}>Back</p>
             <div className="divisiongoal">

             </div>
             <div className="pendinggoals">
                 <div className="conGoal-1">
                     <div className="taskwork">
                     <h1>Walk 4 kilometers</h1>
                     </div>
                     <div className="arrowmark">
                         <img src={Greenarrow} alt="" />
                     </div>
                 </div>
                 <div className="conGoal-1" id="task2goal">
                     <div className="taskwork">
                     <h1>Meditate 30 min</h1>
                     </div>
                     <div className="arrowmark">
                         <img src={Greenarrow} alt="" />
                     </div>
                 </div>
                 <div className="conGoal-1" id="task3goal">
                     <div className="taskwork">
                     <h1 id="Strikeoff"><strike><b>Exercise 30 min</b></strike></h1>
                     </div>
                     <div className="arrowmark">
                         <img src={Greenarrow} alt="" />
                     </div>
                 </div>
             </div>
             <div className="percent"> 
                <h2>Today's goal complition</h2>
             {progressInstance}  
             </div>
            <h1 id="goal-title">Goals:</h1>
            <div className="weightlose">
                <Carousel>
                    <Carousel.Item>
                        <h1><b>Weight Track:</b></h1>
                        <br /><br />
                        <h2>Lose weight:</h2>
                        <div className="div-Matter-info">
                            <div className="actual-weight">
                                <h1><b>85</b></h1>
                                <h3>Original weight</h3>
                            </div>
                            <div className="goal-weight">
                                 <h1><b>80</b></h1>
                                <h3>Present weight</h3>
                            </div>
                        </div>
                        <img src={WeightTrack} alt="" id="weightMeter"/>
                        <h1><b>Goal:</b>70</h1>
                    <Carousel.Caption>
      
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d">
                        <h1><b>1.5</b> <br /> Kilometer</h1>
                        </div>
                        <div className="divQA">
                            <div className="AA">
                            <h3><b>4.'17''</b> <br />
                            <h6>Pace</h6></h3>
                            </div>
                            <div className="BB">
                            <h3><b>4.'17''</b> <br />
                            <h6>Pace</h6></h3>
                            </div>
                            <div className="CC">
                            <h3><b>4.'17''</b> <br />
                            <h6>Pace</h6></h3>
                            </div>
                        </div>
                        <img src={Walk} alt="" />

                <Carousel.Caption>
                </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                 <h3>First slide label</h3>
                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum. vgkhvkghjbhjh</p>
                <Carousel.Caption>
                </Carousel.Caption>
                 </Carousel.Item> */}
                </Carousel>

            </div>

            </>
        )
} 

export default TrackGoals;