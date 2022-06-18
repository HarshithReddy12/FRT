import React from 'react';
import BgWallpaper from '../images/covid/patientloginHos.jpg'
import './PatientLofinHospital.css'
import {useHistory} from 'react-router'
const PaitentLoginHospital = () =>{
    const history = useHistory();
    return(
        <>
        
         <div className="maintainPatientLogin">
            <h1 id="leftMove-padding"><b>Patient Login</b></h1>
            <h2>Patient ID:</h2>
            <input type="text" name="" id="moveleftInput-text-login" />
            <h2>Patient Password:</h2>
            <input type="password" name="" id="moveleftInput-text-login" /> <br />
            <button id="Patientlogin-portalenter-button" onClick={()=>{history.push('/OpenedPatientPortal')}}>Login</button>
         </div>

          <img src={BgWallpaper} alt="" id="WallpaperPatient-login" />
         </>
    );
}
export default PaitentLoginHospital;    