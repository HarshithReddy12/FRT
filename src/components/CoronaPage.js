import React from 'react';
import CoronaBG from '../images/CoronaBG.jpg'
import './CoronaPage.css'
import { useHistory } from "react-router";
import vaccination from '../images/covid/Vaccination.png'
import test from '../images/covid/Test.png'
import delivary from '../images/covid/Delivery.png'
const CoronaPage = () => {
    const history = useHistory();
    return(
        <>
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
        <img src={CoronaBG} alt="" id="coronabg" />
        <h1>Options:</h1>
         <div className="features-corona">
             <div className="photoOf-feature">
                 <img src={vaccination} alt="Vacination" />
                 <h2>Vaccination</h2>
             </div>
             <div className="photoOf-feature">
                 <img src={test} alt="Test" />
                 <h2>Test</h2>
             </div>
             <div className="photoOf-feature">
                 <img src={delivary} alt="Food-package" />
                 <h2>Delivary</h2>
             </div>
         </div>
        </>
    )
}

export default CoronaPage;