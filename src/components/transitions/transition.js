
import React from "react";
import './transition.css';
// import $ from 'jquery'
import {
    ComponentTransition,
    AnimationTypes
  } from "react-component-transition";

import Timeline from "../timeline/timeline";
import Timeline2 from "../timeline/timeline2";
import Timeline1 from "../timeline/timeline1";
  function Transitions() {


    const [showDetails, setshowDetails] = React.useState(0);


 

      return (
          <div>
            
              <div style={{ display: "flex",

          
            
            }}>
     
          
            
     <img src="https://img.icons8.com/officel/50/000000/arrow.png" 
      style={{ height: "100%", marginTop: "50vh" ,marginLeft:"2rem"
      ,transform: "rotate(360deg) scaleX(-1)"
    
    }}
          onClick={() => setshowDetails(  (2+showDetails )%3  )} />
      
 
        <ComponentTransition
          enterAnimation={AnimationTypes.slideLeft.enter}
          exitAnimation={AnimationTypes.slideLeft.exit}
        >
          {showDetails==0? <Timeline /> : (showDetails==1?<Timeline1/>:(<Timeline2/>)  )}
        </ComponentTransition>
             
        
    
        <img src="https://img.icons8.com/officel/50/000000/arrow.png" 
      style={{ height: "100%", marginTop: "50vh" ,marginLeft:"2rem"}}
          onClick={() => setshowDetails(  (1+showDetails )%3  )} />
      </div>  
          </div>
      )
  }
  
  export default Transitions
  