import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AppCarousel: React.FC = () => {
  const images = [
    {
      name: "so.jpg",
      subtitle: "feliz 18 anos!",
    },
    {
      name: "guiMaryCamila.jpg",
      subtitle: "Camila, Mary & Gui",
    },
    {
      name: "curiosamentos.jpg",
      subtitle: "já pode ser presa. olha vc se escondendo da polícia",
    },
    {
      name: "deboa.jpg",
      subtitle: "di boa",
    },
    {
      name: "fotinha.jpg",
      subtitle: "fofs",
    },
    {
      name: "if922.jpg",
      subtitle: "<3",
    },
    {
      name: "mary.jpg",
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
            src={`../../src/assets/images/carousel/${image.name}`}
            alt={image.subtitle}
          />
          <p className="text-xl">{image.subtitle}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default AppCarousel;
