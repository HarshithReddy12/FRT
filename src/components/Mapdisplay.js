import React from "react";
import './Mapdisplay.css'
import Appolophoto from '../images/covid/apollo.png'
import { useHistory } from "react-router";
const Mapdisplay = () =>{
        const history = useHistory();
    return( 

        <>
        <div className="overall-page-container-display">
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
        <div className="placeshow-nearby-chamge">
            <div className="displayingInfo-nearbyplac">
                <h1 id="centeralign-new">Places</h1>
                <div className="container-list-nearby-lab">
                    <div className="boxes-labtest-hospir">
                        <div className="flex-direction-change">
                        <img src={Appolophoto} alt=""  height="110"/>
                        </div>
                        <div className="flex-direction-change1">
                            <h1>Apollo</h1>
                            <h6><i id="iconLocation" class="fas fa-map-marker"></i>Near Old check post road</h6>
                        </div>
                    </div>
                    <div className="boxes-labtest-hospir"></div>
                    <div className="boxes-labtest-hospir"></div>

                </div>
            </div>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="870" height="580" id="gmap_canvas" src="https://maps.google.com/maps?q=vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br /> 
      </div></div>

      {/* <a href="https://www.embedgooglemap.net">google map on my website</a> */}
</div>

</div>
        </>
   )
}

export default Mapdisplay;