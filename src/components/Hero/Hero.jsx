// import React from 'react'
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import Slider from "react-slick";

// import slider1 from '../../assets/slider1.png'
// import slider2 from '../../assets/slider2.png'
// import './Hero.css'
// function Hero() {
//      var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//      autoplay: true,        // ✅ AUTO
//     autoplaySpeed: 3000,   // ✅ every 3s
//     arrows: false,         // optional (Netflix-style)
//     pauseOnHover: false, 
//   };

//   return (
//     <div className='full_wrapper'>
//         {/* slider */}
//         <div className='sliding_images'>
//             <Slider {...settings}>
    
//  {pictures.map((pic) => (
//         <div>
//           <img src={pic.img} alt="slider" />
//         </div>
//       ))} 
//       </Slider>
//         </div>

//         {/* right pictures */}
//         <div>
// <sideCard image={card1} description=" Lorem ipsum dolor sit amet consectetur adipisicing elit "/>
// <sideCard/>
//         </div>

//     </div>
    
//   )
  
// }

// // const sideCard=({image},{description})=>{
// // return(
// // <div>
// //     <img src={image} alt="card 1" />
// //     <p>{description}</p>
// // </div>
// // )
// }

// const pictures=[
//     {
//         img: slider1,
//     },
//     {
//         img: slider2,
//     },
// ]
// export default Hero