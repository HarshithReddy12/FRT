import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css';
 import 'mdbreact/dist/css/mdb.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoMedico from './images/new_newest_logo.png'
import userLog from './images/Userlogo.png'
import { useState } from 'react';
import Feature from './components/Feature'
import Homer from './components/Homer';
import Reminder from './components/Reminder';
import Appointment from './components/Appointment';
import OnlineBooking from './components/OnlineBooking';
import SelectDoctor from './components/SelectDoctor';
import DoctorDetails from './components/DoctorDetails';
import Bookslot from './components/Bookslot';
import TypeOfOnline from './components/TypeOfOnline';
import OrderMedicine from './components/OrderMedicine';
import BMI from './components/BMI';
import HospitalLogin from './components/Secondapp/HospitalLogin';
import DoctorPortal from './components/Secondapp/DoctorPortal';
import DoctorLogin from './components/Secondapp/DoctorLogin';
import List from './components/Secondapp/List';
import PatientProgress from './components/Secondapp/PatientProgress';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css';
import Schedule from './components/Secondapp/Schedule';
import OnDutyDoctor from './components/Secondapp/OnDutyDoctor';
import PatientPortal from './components/Secondapp/PatientPortal';
import { render } from '@testing-library/react';
import Navbar1 from './components/Navbar1';
import SignUpNew from './components/SignUpNew';
import Labpage from './components/Labpage';
import Lablist from './components/Lablist';
import LabHospitalList from './components/LabHospitalList';
import Labbook from './components/Labbook';
import CoronaPage from './components/CoronaPage';
import WomenPortal from './components/WomenPortal';
import Profile from './components/Profile';
import TrackGoals from './components/TrackGoals';
import TrackGoal from './components/TrackGoal';
import ReminderTable from './components/ReminderTable';
import Mapdisplay from './components/Mapdisplay';
import Previousappointment from './components/Previousappointment';
import Indexpage from './components/Indexpage';
import OfflineappointmentNewlist from './components/OfflineappointmentNewlist';
import PaymentMoney from './components/PaymentMoney';
import CompletedPaymentModule from './components/CompletedPaymentModule';
import PaitentLoginHospital from './components/PaitentLoginHospital';
import OpenedPatient from './components/OpenedPatient';
import AdminPortal from './components/AdminPortal';
import VoiceRego from './components/VoiceRego';
function App() {
 
const [signup,setSignup] = useState(false);
return(
   <Router>
    <Navbar1 signup={signup} setSignup={setSignup}/>
    
 <div className="App">
 <Switch>
 <Route path='/' exact component={Home}></Route>
 <Route path='/Login'><SignUp setSignup={setSignup}  /></Route>
 <Route path='/signup'  ><SignUp setSignup={setSignup}  /></Route>
 <Route path='/Features' ><Feature /></Route>
 <Route path='/homeremidies' exact component={Homer} />
 <Route path='/reminders' exact  component={Reminder} />
 <Route path='/appointment' exact component={Appointment} />
 <Route path='/OnlineBooking' exact component={OnlineBooking} />
 <Route path='/SelectDoctor' exact component={SelectDoctor} />
 <Route path='/Detailspage' exact component={DoctorDetails} />
 <Route path='/SlotBooking' exact component={Bookslot} />
 <Route path='/TypeOfOnline' exact component={TypeOfOnline} />
 <Route path='/medicine' exact component={OrderMedicine} />
 <Route path='/Track' exact component={BMI} />
 <Route path='/HospitalLogin' exact component={HospitalLogin} />
 <Route path='/Doctorportal' exact component={DoctorPortal} />
 <Route path='/DoctorPortalLogedIn' exact component={DoctorLogin} />
 <Route path='/List' exact component={List} />
 <Route path='/Patientpage' exact component={PatientProgress} />
 <Route path='/Schedule' exact component={Schedule} />
 <Route path='/OnDutyDoctor' exact component={OnDutyDoctor} />
 <Route path='/PatientPortal' exact component={PaitentLoginHospital} />
 <Route path='/Labpage'><Labpage /></Route>
 <Route path='/Labtest' ><Lablist /></Route>
 <Route path='/lab/hospitalList'><LabHospitalList /></Route>
 <Route path='/Booklab'><Labbook /></Route>
 <Route path='/Corona'><CoronaPage /></Route>
 <Route path='/WomenPortal'><WomenPortal /></Route>
 <Route path='/Profile'><Profile /></Route>
 <Route path='/Goals'><TrackGoals /></Route>
 <Route path='/TrackGoal'><TrackGoal /></Route>
 <Route path='/Checktable'><ReminderTable /></Route>
 <Route path='/HospitalNearme'><Mapdisplay /></Route>
 <Route path='/PriviousAppointment'><Previousappointment /></Route>
 <Route path='/ApiuseOfflineappointment' ><OfflineappointmentNewlist /></Route>
 <Route path='/Payment/Transaction'  ><PaymentMoney /> </Route>
 <Route path='/CompletedPaymentModule' ><CompletedPaymentModule /></Route> 
 <Route path='/OpenedPatientPortal'><OpenedPatient /></Route>
 <Route path='/Adminportal'><AdminPortal /></Route>
 <Route path='/VoiceSearch'><VoiceRego /></Route>
 
 </Switch>
 </div>
 </Router> 
);
}

export default App;