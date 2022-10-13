import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import so from "../assets/images/carousel/so.jpg";
import guiMaryCamila from "../assets/images/carousel/guiMaryCamila.jpg";
import curiosamentos from "../assets/images/carousel/curiosamentos.jpg";
import deboa from "../assets/images/carousel/deboa.jpg";
import fotinha from "../assets/images/carousel/fotinha.jpg";
import if922 from "../assets/images/carousel/if922.jpg";
import mary from "../assets/images/carousel/mary.jpg";

const AppCarousel: React.FC = () => {
  const images = [
    {
      image: so,
      subtitle: "feliz 18 anos!",
    },
    {
      image: guiMaryCamila,
      subtitle: "Camila, Mary & Gui",
    },
    {
      image: curiosamentos,
      subtitle: "já pode ser presa. olha vc se escondendo da polícia",
    },
    {
      image: deboa,
      subtitle: "di boa",
    },
    {
      image: fotinha,
      subtitle: "fofs",
    },
    {
      image: if922,
      subtitle: "<3",
    },
    {
      image: mary,
      subtitle: "cami & mary",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      className="text-white flex flex-row h-full"
    >
      {images.map((image) => (
        <div className="text-center h-full flex flex-col justify-center">
          <img
            className="h-[70%] md:h-[60%] xl:h-[40%] object-contain"
            src={image.image}
            alt={image.subtitle}
          />
          <p className="text-xl">{image.subtitle}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default AppCarousel;
