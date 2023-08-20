import React from "react";
import "../App.css";
const About =()=>{
    const imagePath = "https://wehco.media.clients.ellingtoncms.com/imports/adg/photos/205074801_SDC2024_FITH_KeyArt_Secondary_HighRes_ORIG_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d"
    return(
        <div className=" heading">
            <h1 >About</h1>
        <h3>
            Our Growth</h3>
            <div className="cls">
           
            <img src= {process.env.PUBLIC_URL  +  imagePath }alt=" s1" width="500px" />
          
            <h4>Silver Dollar City has encouraged guests to celebrate the Fire in the Hole roller coaster this summer, announcing it would be retired after this year.Opening in the spring of 2024, the new Fire in the Hole will cost $30 million and have myriad new bells and whistles -- including a new, expanded setting, the Fire District, where Station No. 3 and other family-focused attractions are already located as Fireman's Landing  <button>Click To Know more</button></h4>
                
            </div>
            
            </div>
    );
};
export default About;