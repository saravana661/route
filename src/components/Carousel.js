import React from "react"
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlider=()=>{
    return(
        <Carousel>
            <div >
                <img src="https://cdn.pixabay.com/photo/2016/07/01/23/16/carnival-1492099_1280.jpg" alt="slide 1"  height="480px"></img> 
                <p className="chairs">"This Rides Make a Moment Memerable and joyfull through the Every Second and Till The Life Journey"</p>
              
            </div>
            <div >
                <img src="https://media.istockphoto.com/id/485036970/photo/cute-kids-having-fun-riding-on-a-colorful-carnival-carousel.webp?b=1&s=612x612&w=0&k=20&c=ziTXbO518cEK0oUmkVecXzNUnzAg3kBu2NiR3cdegCY=" alt="slide 1" height="480px"></img>

                <p className="chairs">" The Place makes the Humans challenging And thrilling Moments Throuhout th day"</p>
            </div>
            <div >
                <img src="https://cdn.pixabay.com/photo/2014/11/21/03/29/fair-540126_1280.jpg" alt="slide 1" height="480px" ></img>
                <p className="chairs">"Here the Every Children like this Place they have a Woderfull Play and Day</p>
            </div>
            <div>
                <img src="https://media.istockphoto.com/id/503804809/photo/people-riding-a-rollercoaster-in-an-amusement-park.jpg?s=612x612&w=0&k=20&c=pAQ1Y3BehhkZO9w6HBBuSQiO-FguRhkAh8M8bt9VM6g=" height="480px" alt="slide 4"></img>
                <p className="chairs">"Theme Park propogate only for kids the Adult may enjoy the Coolest rides with couples" </p>
            </div>
        </Carousel>
    )
}
export default CarouselSlider;