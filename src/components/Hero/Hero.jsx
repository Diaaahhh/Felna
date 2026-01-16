import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import card1 from "../../assets/card1.webp";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import "./Hero.css";

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
  <div className="picture_wrapper">
      {/* slider */}
      <div className="sliding_images">
        <Slider {...settings}>
          {pictures.map((pic) => (
            <div>
              <img src={pic.img} alt="slider" />
            </div>
          ))}
        </Slider>
      </div>

      {/* right pictures */}
      <div className="right_pictures">
        <div className="upper_picture">
          
          {/* <img src= {card1} alt="card1" /> */}
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="lower_picture">
          {/* <img src= {card1} alt="card1" /> */}
                    <p>Lorem ipsum dolor sit amet.</p>

          </div>
        {/* <SideCard
          image={card1}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
        <SideCard
          image={card1}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        /> */}
      </div>
    </div>

    
  );
}



const pictures = [{ img: slider1 }, { img: slider2 }];

export default Hero;
