import React from 'react';
import { useHistory } from "react-router";
import userphoto from '../images/Userlogo.png';
import { useState } from 'react';
import './Profile.css'
const Profile = () =>{
    const history = useHistory();
    const[name,setName] = useState("");
    const[username,setUserName] = useState("")
    const[phone,setPhone] = useState("")
    const[email,setEmail] =useState("")
    const[changeThing,setchangeThing] =useState(true)

    
    if(!changeThing)
    return(
        <>
        <div className="profileList-full">
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
        <br /> <br />
        <h1>Profile:</h1>
        <div className="userprofile-Info">
            <div className="userlogo-photo">
                <img src={userphoto} alt="" />
            </div>
            <div className="user-name-profile">  
              <h1> <b>{name}</b></h1>
            </div>
            <div>
                <button onClick={()=>{setchangeThing(true)}}>Done</button>
            </div>
        </div>
        
        <hr />
        <h1>Details</h1>
        <div id="f-details">
            <div className="profileuser-name">
                    <label id="details-profile-change-name">Full Name</label> <br />
                    <input type="text" name="" placeholder={name} id="box-profile-change-name1"  onChange={event => setName(event.target.value)}/>
            </div>
                <div className="username-profile">
                    <label id="details-profile-change-name">Username</label> <br />
                    <input type="text" name="" placeholder={username} id="box-profile-change-name2"  onChange={event => setUserName(event.target.value)}/>
                </div>
        </div>
        <div id="f-details">
            <div className="profileuser-name">
                    <label id="details-profile-change-name">Phone Number</label> <br />
                    <input type="text" name="" placeholder={phone} id="box-profile-change-name3" onChange={event => setPhone(event.target.value)}/>
            </div>
                <div className="username-profile">
                    <label id="details-profile-change-name">Email</label> <br />
                    <input type="email" name="" placeholder={email} id="box-profile-change-name4"  onChange={event => setEmail(event.target.value)}/>
                </div>
        </div>
        

            
        
        
        </div>
        </>


    
    )
    return(
        <>
        <div className="profileList-full">
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
        <br /> <br />
        <h1>Profile:</h1>
        <div className="userprofile-Info">
            <div className="userlogo-photo">
                <img src={userphoto} alt="" />
            </div>
            <div className="user-name-profile">
              <h1> <b>{name}</b> <i class="fas fa-pen" id="pen-edit" onClick={()=>{setchangeThing(false)}} ></i></h1>
            </div>
        </div>
        
        <hr />
        <h1>Details</h1>
        <div id="f-details">
            <div className="profileuser-name">
                    <label id="details-profile-change-name">Full Name</label> <br />
                    <input type="text" name="" value={name} id="box-profile-change-name"  disabled/>
            </div>
                <div className="username-profile">
                    <label id="details-profile-change-name">Username</label> <br />
                    <input type="text" name="" value={username} id="box-profile-change-name"  disabled/>
                </div>
        </div>
        <div id="f-details">
            <div className="profileuser-name">
                    <label id="details-profile-change-name">Phone Number</label> <br />
                    <input type="text" name="" value={phone} id="box-profile-change-name" disabled/>
            </div>
                <div className="username-profile">
                    <label id="details-profile-change-name">Email</label> <br />
                    <input type="email" name="" value={email} id="box-profile-change-name"  disabled/>
                </div>
        </div>
        

            
        
        
        </div>
        </>
    )
}

export default Profile;