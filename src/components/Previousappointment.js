import React from "react";
import './Previousappointment.css'
const Previousappointment =()=>{
    return(
        <>
        <div className="totalpage-dashboard-appointment">
        <h2>Dashboard</h2>
        <div className="top-row-appointment-dashboard">
            <div className="bigbox-appointment">
                    <h1 id="zero-number-display">0</h1>
                <h2 id="label-appointment-number-display">Appointments</h2>

            </div>
            <div className="small-bar-details-appointment">
                <div className="small-bar-details-appointment1">
                        <div className="labtest-label-appointment">
                            <h1>Labtest</h1>
                        </div>
                        <div className="number-label-appointmentLabtest">
                            <h1>2</h1>
                        </div>
                </div>
                <div className="small-bar-details-appointment2">
                         <div className="labtest-label-appointment">
                            <h1>Report</h1>
                        </div>
                        <div className="number-label-appointmentLabtest">
                            <h1><i class="fas fa-angle-right"></i></h1>
                        </div>
                </div>
            </div>




            </div>
            <div className="div-containers-botton-appointment">
                <div className="reminder-at-appointmnet">
                    <div className="icon-at-appointmnet">
                        <h1>5</h1>
                    </div>
                    <div className="matter-of-icon-at-appointment">
                        <h1><i class="fas fa-stopwatch"></i>Reminder</h1>
                    </div>
                </div>
                 <div className="reminder-at-appointmnet">
                    <div className="icon-at-appointmnet">
                        <h1>2</h1>
                    </div>
                    <div className="matter-of-icon-at-appointment">
                        <h1><i class="fas fa-capsules"></i>Medicine Order</h1>
                    </div>
                </div>
                 <div className="reminder-at-appointmnet">
                    <div className="icon-at-appointmnet">
                        <h1>5</h1>
                    </div>
                    <div className="matter-of-icon-at-appointment">
                        <h1><i class="fas fa-star-half-alt"></i>Points</h1>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Previousappointment;