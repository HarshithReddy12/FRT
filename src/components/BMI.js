import React, { useState } from "react";
import BMIbg from '../images/covid/BMI.png';
import './BMI.css'
import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import bmichartdisplay from '../images/covid/BMIChart.png'
const BMI = () => {
  const history = useHistory();
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi);
  };
  const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3"><h5><b>BMI chart</b></h5></Popover.Header>
    <Popover.Body id="zoomBro">
      <img src={bmichartdisplay} alt="" height="300px" />
    </Popover.Body>
  </Popover>
);

 return (
    <>
    <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
    <div id="glassmade-bmi-container">
      <div className="gbc">
      <h1><b>BMI calculator</b></h1>
      </div>
    <form onSubmit={calculate}>
        <div>
          <label id="him-label"><h2>Height in meters</h2></label> <br />
          <input id="BMI-input" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div>
          <label id="him-label"><h2>Mass in kg</h2></label><br />
          <input id="BMI-input" value={mass} onChange={(e) => setMass(e.target.value)} />
        </div>

        <button type="submit" id="calculate-bmi-change">calculate</button>
      </form>
      <p id="bmiFinder">bmi: {bmi}</p>
    </div>
    <div className="details-bmi-measure">
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <Button variant="success">BMI chart</Button>
  </OverlayTrigger>
  </div>
    <img src={BMIbg} alt="" className="bmibg" />
    
    
    
    </>
  );
}


export default BMI;