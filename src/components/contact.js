import React from "react";
const Contact =()=>{
 const imagePath = "https://tse3.mm.bing.net/th?id=OIP.7qwfp9GjtfocC0PqHf4AJwHaEK&pid=Api&P=0&h=220"
    return(
        <div className=" heading">
            <h1 >Contact</h1>
        <h3>
            Our Customer Service</h3>
            <div className="cls">
           
            <img src= {process.env.PUBLIC_URL  +  imagePath }alt=" s1" width="500px" />
          
            <h4>"Before I even visited the park, I recall hearing my aunt and uncle, who lived in southeast Kansas, discussing their experience at the park," Baldwin goes on. "They commented that the ride was really something and had a breathtaking ending. By the time my 'coaster enthusiast genes' kicked in, I was eager to experience what I had heard about. <button>Click To Know more</button></h4>
                
            </div>
            
            </div>
    );
};
export default Contact;