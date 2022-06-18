import React from 'react';
import './ReminderTable.css'
import {useHistory} from 'react-router-dom'
const ReminderTable = () =>{
    const history = useHistory();
    return(
        <>
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
        <div className="reminder-table-harsha">
            <div id="center-Reminder-table">
            <h1 id="Table-heading">Reminder Table</h1>
            </div>
            <div className="table-begin">
                <table>
                    <tr>
                        <th id="ttHeading1"><b>S.No</b></th>
                        <th id="ttHeading1"><b>Name</b></th>
                        
                        <th id="ttHeading1"><b>Time</b></th>
                        <th id="ttHeading1"><b>status</b></th>
                    </tr>
                     <tr>
                    <td>1</td>
                    <td>Aspirin</td>
                     <td>8:00 AM</td>
                     <td>✔️active</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Lyrica</td>
                     <td>8:00 AM</td>
                     <td>❌Inactive</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>amitriptyline tablet</td>
                     <td>8:00 AM</td>
                     <td>❌Inactive</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>amlodipine besylate	</td>
                     <td>8:00 AM</td>
                     <td>✔️active</td>
                    </tr>
                     <tr>
                    <td>5</td>
                    <td>amiodarone tablet</td>
                     <td>8:00 AM</td>
                     <td>✔️active</td>
                    </tr>
                </table>
            </div>
        </div>

        </>
    )
}

export default ReminderTable;