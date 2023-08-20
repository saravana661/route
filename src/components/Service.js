import React from "react";
const Service =()=>{
    const imagePath = "https://tse1.mm.bing.net/th?id=OIP.ind0BUlcP6vNS2SgJcSMuAHaEK&pid=Api&P=0&h=220"
    return(
        <div className=" heading">
            <h1 >Service</h1>
        <h3>
            Highly Proficient Mechanics</h3>
            <div className="cls">
           
            <img src= {process.env.PUBLIC_URL  +  imagePath }alt=" s1" width="500px" />
          
            <h4>"Fire in the Hole is a truly unique Silver Dollar City experience," Thomas says. "The ride gives a fictional account of a historic story that actually occurred 130-plus years ago on these very grounds. In the 1880s, there was a working mine in Marvel Cave. Miners actually built a small town on top of the mine. A post-war vigilante group, the Baldknobbers, actually burned the town to the ground" <button>Click To Know more</button></h4>
                
            </div>
            
            </div>
    );
};
export default Service;