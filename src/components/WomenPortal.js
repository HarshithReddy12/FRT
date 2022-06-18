import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import BG1 from '../images/WomenPortalBg1.png'
import BG2 from '../images/WomenPortalBg2.png'
import BG3 from '../images/WomenPortalBg3.png'
import wchat from '../images/covid/Women-chat.png'
import girlchat from '../images/covid/GirlChat.jpg'
import Girlappointment from '../images/covid/Women-appointment.png'
import './WomenPortal.css'
import Wappointmentpic from '../images/covid/Wappointment.png'
const WomentPortal = () =>{
    return(
        <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BG1}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BG2}
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BG3}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <br /><br /> <br />
        <div className="w-chat">
          <h1 id="absoluteWchat"><b>WChat</b></h1>
          <div className="line-division-wo">

          </div>
          <p id="paragraph-absolute">Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi atque blanditiis perspiciatis cupiditate totam id sed magni, magnam architecto incidunt consequuntur non. Quae nisi, et alias porro minima aspernatur?
          Veritatis minus adipisci, ullam repellat quidem excepturi nihil distinctio quia delectus inventore eveniet, nisi eius quam, molestias vel facere corporis eum deleniti. A doloribus sequi modi omnis commodi odit quibusdam.</p>
          <div className="girlchart">
            <div className="gradientbutton-change">
              <button>Click here</button>
            </div>
            <img src={girlchat} alt="" id="girlchat-W"/>
          </div>
          <img src={wchat} alt="" id="w-chatbg"/>
        </div> <br /> <br />
        <div className="W-appointment">
          <h1 id="w-appointment"><b>WAppointment</b></h1>
          <img src={Wappointmentpic} alt="" id="Wappointmentpic"/>
          <div className="line-division-wo" id="w-appointmentLine-middle">

          </div>
          <p id="paragraph-absolute2" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas, consequatur inventore doloribus amet, molestiae temporibus similique qui enim porro ipsam veniam. Eligendi ipsam tempore consequatur dolor a sequi at!
            Voluptate reiciendis quaerat quo, quae explicabo pariatur? Aperiam, numquam necessitatibus adipisci tempora sapiente reprehenderit dolorum fugiat illum veritatis. Ab excepturi facere id accusamus reprehenderit libero quam saepe asperiores ut tempora.
          </p>
           <div className="gradientbutton-change1">
              <button>Click here</button>
            </div>
          <img src={Girlappointment} alt="" id="second-appointmentW"/>
        </div>

        </>
    )
}

export default WomentPortal;