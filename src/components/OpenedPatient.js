import React from 'react';
import bgBackgroundOpen from '../images/covid/Patient.png'
import './openedPatient.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import HospitalMoniter from '../images/HospitalMoniter.mp4'
import Report1 from '../images/covid/Report1.jpg'
import Report2 from '../images/covid/Report2.jpg'
import Report3 from '../images/covid/Report3.jpg'
const OpenedPatient = () => {
    return(
        <>
        <img src={bgBackgroundOpen} alt="" id="PatientOpened-top-display-loggedIn" />
        <br /><br />
        <br /><br />
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Present Status">
      <h1>Live Monitering</h1>
      <hr />
       <video width="100%" height="500" loop autoPlay muted>
            <source src={HospitalMoniter}type="video/mp4"/>
        </video>
        <br />
        <h2>Problem</h2>
        <hr />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae blanditiis enim repudiandae quaerat beatae cumque dolores temporibus ullam. Dolor, consequatur. Ut unde obcaecati perspiciatis fuga quasi consectetur, exercitationem voluptatum?
    Provident placeat nobis ea eos, velit aliquid, autem reiciendis itaque asperiores dolorum in. Consequuntur minima accusamus ad. Consequuntur, tenetur soluta obcaecati nobis fuga officia odit nulla pariatur odio voluptatem ipsam.
    Ut distinctio necessitatibus repellat quos ex voluptatum doloribus voluptas qui. Repudiandae, quis? Eos odio, molestias, earum autem tenetur natus dolor a asperiores voluptate deleniti ipsam magni architecto accusantium laudantium optio?
    Laborum exercitationem inventore sequi, vero aliquid illum tenetur error quo libero, facilis ab sit assumenda fugit! Ipsum aut, dicta temporibus amet modi quis iure minus sequi consequuntur, qui nostrum pariatur.
    Autem neque assumenda quas inventore laborum facere atque porro sit consectetur dolore. Veritatis voluptate ipsam repellendus officiis? Fugiat molestias ducimus animi, totam voluptate recusandae laudantium! Iure commodi beatae cumque nihil.
    <br /> <br />
        <h2>Operation Date</h2> <hr />
        <div className="h3-od">
            <h3>15<sup>th</sup> November 2021</h3>
        </div>
        <br /> <br />
        <h2>Discharge Date</h2> <hr />
        <div className="h3-od">
            <h3>25<sup>th</sup> November 2021</h3>
        </div>
  </Tab>
  <Tab eventKey="profile" title="Medication">
    <h1>Medication Used:</h1>
    <hr />
    <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repudiandae enim quis ullam. Fuga exercitationem numquam similique eius vel placeat, minus voluptates et nemo, quibusdam, iusto facere alias rerum? Impedit.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, inventore culpa, assumenda recusandae numquam delectus vel similique consequuntur eos adipisci minus sint hic in nemo modi illo. Aliquid, placeat veniam.</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at omnis natus facilis exercitationem aspernatur, officia iste maiores nam quas necessitatibus facere iusto dolorem, vel quam quisquam molestias consectetur velit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit, amet quisquam fuga iusto officiis rem similique molestias quibusdam eos aspernatur vel, natus, perferendis error repudiandae deleniti adipisci deserunt. Consequuntur!</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati aliquam facilis similique corrupti nobis voluptatibus maxime quae sequi assumenda modi, sint harum nulla cupiditate culpa ratione nesciunt! Exercitationem, illum esse.</li>
    </ul>
  </Tab>
  <Tab eventKey="contact" title="Billing" >
    <h1>On-Going Billing Track</h1>
    <hr />
    <div className="align-right-side-BILLING">
        <div>
            <h1>Name</h1>
        </div>
        <div>
            <h1>Cost</h1>
        </div>
    </div>
    <hr />
    <div className="align-right-side-BILLING">
        <div>
            <h3>CITI Scan</h3>
        </div>
        <div>
            <h3>RS:300</h3>
        </div>
    </div>
    <div className="align-right-side-BILLING">
        <div>
            <h3>Blood test</h3>
        </div>
        <div>
            <h3>Rs:200</h3>
        </div>
    </div>
    <div className="align-right-side-BILLING">
        <div>
            <h3>Room charges</h3>
        </div>
        <div>
            <h3>Rs:1000</h3>
        </div>
    </div>
    <div className="align-right-side-BILLING">
        <div>
            <h3>Tablets</h3>
        </div>
        <div>
            <h3>Rs:3000</h3>
        </div>
    </div>
    <hr />
    <h1><b>Total:</b>4500</h1>
 </Tab>
  <Tab eventKey="reports" title="Reports" >
        <img src={Report1} alt="" /> 
        <img src={Report2} id="spacing-Resport-between" alt="" />
        <img src={Report3} id="lineSpace-Resport-between" alt="" />
  </Tab>
</Tabs>
        </>
    )
}

export default OpenedPatient;