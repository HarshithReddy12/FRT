import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './OfflineappointmentNewlist.css'
const OfflineappointmentNewlist = () => {
    const baseUrl = "http://localhost:8080/api/v1/locations";
    const [postss, setPostss]=useState([])

     useEffect(()=>{
        axios.get(`${baseUrl}`).then((res)=>{
            console.log(res);
            setPostss(res.data);
        })
    },[]);
  
    return(
        <>
            <form className="search-form-apiLoc"> 
                <input type="text" className="search-bar-apiLoc" />
              <button type="submit" className="search-button-apiLoc">Search</button>
            </form>
            
             <ui>
               {
                   
                   postss.map(post=>(
                       <div className="alighflex">
                       <div className="imgSmall-cardapi">
                       <img key={post.id} src={post.imageUrl} id="imageUrlAPi"></img>
                       <div className="aligh-right-flex-api">
                           <div>
                               <br />
                       <h2>{post.name}</h2>
                       </div>
                       <div id="ratingdetailsapi">
                           <h3>{post.rating}</h3>
                       </div>

                        
                       </div>
                       <h2>{post.adress}</h2>
                       </div>
                        </div>
                   ))
                   
               }
               </ui> 
               
        </>
    );
}

export default OfflineappointmentNewlist;