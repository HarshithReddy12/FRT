import React from "react";
import bghr from "../images/mainHrbg.png"
import './Homer.css'
import Dropdown  from 'react-bootstrap/Dropdown';
import { useState } from "react";
import { useHistory } from "react-router";
import DarkModeToggle from "react-dark-mode-toggle";

import useSound from 'use-sound';

import boopSfx from '../audio/Headacheaudio.mp3'
import boopSfx1 from '../audio/Stomachacheaudio.mp3'
import boopSfx2 from '../audio/ColdandCough.mp3'
const Homer =()=>{

    const [play, { stop }] = useSound(boopSfx);
    const [play1, { pause }] = useSound(boopSfx1);
    const [play2, { duration }] = useSound(boopSfx2);
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const history = useHistory();
    const[Type,setType]=useState("Selectone");
    if(Type=='Headache')
    return(
      <>
      
      <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>

       <img src={bghr} alt="" className="hrBg1" />
       <div className="drop-downBox">
       <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic"  size="lg">
   {Type}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>{setType("Headache")}}>Headache</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Stomachache")}}>Stomach ache</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Cold and Cough")}}>Cold and Cough</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

</div>
      <div className="parallel-side-flex">
        <div>
      <h1>Remidies for headache  </h1> </div>
      <div className="playbutton-icon">
      <button onMouseEnter={() => play()} onMouseLeave={() => stop()}><i class="fas fa-volume-up"></i></button>
      </div>
      </div>
      <p> &nbsp;&nbsp;&nbsp;&nbsp; Have some tea, coffee, or something with a little caffeine in it. If you get it early enough after the pain starts, it could ease your headache pain. It can also help over-the-counter pain relievers like acetaminophen work better. Just don’t drink too much because caffeine withdrawal can cause its own type of headache.
Hydrate
Drink plenty of liquids. Dehydration can cause a headache or make one worse.
Dim the Lights
Bright or flickering light, even from your computer screen, can cause migraine headaches. If you’re prone to them, cover your windows with blackout curtains during the day. Wear sunglasses outdoors. You might also add anti-glare screens to your computer and use daylight-spectrum fluorescent bulbs in your light fixtures.

</p>
      <h2>Medication:</h2>
      <ul>
        <li>Fioricet</li>
        <li>ibuprofen</li>
        <li>caffeine</li>
        <li>naproxen</li>
      </ul>
      </>
      

    )
     if(Type=='Stomachache')
    return(
      <>
      <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
       <img src={bghr} alt="" className="hrBg1" />
       <div className="drop-downBox">
       <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic"  size="lg">
   {Type}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>{setType("Headache")}}>Headache</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Stomachache")}}>Stomach pain</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Cold and Cough")}}>Cold and Cough</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
      <div className="parallel-side-flex">
        <div>
      <h1>Remidies for Stomach ache  </h1> </div>
      <div className="playbutton-icon">
      <button onMouseEnter={() => play1()} onMouseLeave={() => pause()}><i class="fas fa-volume-up"></i></button>
      </div>
      </div>
      <p>Mild stomach aches can go away on their own if you just give them time. But waiting it out can also be useful when you're dealing with crazy diarrhea, which could be a symptom of mild food poisoning.

While this can totally strike at your neighborhood sushi joint, it's also super-common while traveling overseas. That's because your body has to adjust to the new bacteria in the food and water you're consuming while away from home.
Unfortunately, the cure is just waiting it out. "You need to let your body flush itself," says Amit Bhan, MD, a gastroenterologist at Henry Ford Hospital in Detroit.
For gas-related pain, OTC medication like Mylanta, Gas-X can help get rid of gas and bloating.
Gastroesophageal reflux disease (GERD) can cause stomach ache and burning sensation (heartburn),an antacid or acid reducer like Pepcid AC or Zantac 75 can help.
For constipation, a mild OTC stool softener or laxative can help relieve constipation in most cases.
Abdominal cramps can occur due to diarrhea. Medicines like Pepto-Bismol, which contain loperamide or bismuth subsalicylate, can help reduce diarrhea and cramps.
Pain relievers, such as Paracetamol, Ibuprofen, can help reduce the abdominal pain and the pain of cramps caused due to several conditions. It may be combined with anti-cramping medications

</p>
      <h2>Medication:</h2>
      <ul>
        <li>Camylofin</li>
        <li>Clidinium</li>
        <li>Kaopectate</li>
      </ul>
      </>
    )
    if(Type=='Cold and Cough')
    return(
      <>
      <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
       <img src={bghr} alt="" className="hrBg1" />
       <div className="drop-downBox">
       <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic"  size="lg">
   {Type}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>{setType("Headache")}}>Headache</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Stomachache")}}>Stomach pain</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Cold and Cough")}}>Cold and Cough</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
      <div className="parallel-side-flex">
        <div>
      <h1>Remidies for Cold and Cough  </h1> </div>
      <div className="playbutton-icon">
      <button onMouseEnter={() => play2()} onMouseLeave={() => duration}><i class="fas fa-volume-up"></i></button>
      </div>
      </div>
      <p>Cold remedies are almost as common as the common cold, but are they effective? Nothing can cure a cold. But some remedies might help ease your symptoms and keep you from feeling so miserable. Here's a look at some common cold remedies and what's known about them.
        If you catch a cold, you can expect to be sick for one to two weeks. That doesn't mean you have to be miserable. These remedies might help you feel better:

Stay hydrated. Water, juice, clear broth or warm lemon water with honey helps loosen congestion and prevents dehydration. Avoid alcohol, coffee and caffeinated sodas, which can make dehydration worse.
Rest. Your body needs rest to heal.
Try honey. Honey may help coughs in adults and children who are older than age 1. Try it in hot tea.
 
      </p>
      <h2>Medication:</h2>
      <ul>
        <li>Coldact</li>
        <li>Kuff - Q</li>
      </ul>
      </>
    )
    // if(Type=='Selectone')
    return(
        <>
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
       <img src={bghr} alt="" className="hrBg1" />
       <div className="drop-downBox">
       <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic"  size="lg">
   {Type}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>{setType("Headache")}}>Headache</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Stomachache")}}>Stomach pain</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Cold and Cough")}}>Cold and Cough</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
{/* <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={100}
    /> */}
</>

    )
}

export default Homer;