import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  // Images for the carousel
  const images = [
    'images/heroImg1.webp',
    'images/heroImg2.webp',
    'images/heroImg3.webp',
    'images/heroImg4.webp',
    'images/heroImg5.webp',
  ];

  // Custom arrow components for the slider
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-navy bg-opacity-50 text-off-white hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-light-blue`}
        onClick={onClick}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-navy bg-opacity-50 text-off-white hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-light-blue`}
        onClick={onClick}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    );
  };

  // Settings for react-slick carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: dots => (
      <div>
        <ul className="flex justify-center gap-2 pb-4" style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className="h-2 w-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-light-blue" aria-label={`Go to slide ${i + 1}`}></button>
    )
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-oceanblue">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Slider {...settings} className="h-full">
          {images.map((image, index) => (
            <div key={index} className="h-screen w-full">
              <div 
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                role="img"
                aria-label={`Background image ${index + 1}`}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Gradient overlay - left to right from opaque to transparent */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0,34,68,0.8) 0%, rgba(0,34,68,0.5) 70%, rgba(0,34,68,0) 100%)'
        }}
      ></div>
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-navy bg-opacity-30"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="md:max-w-2xl lg:max-w-3xl">
            <h1 className="mb-4 text-center font-bold leading-tight lg:text-left">
              <span className="block text-4xl text-lightcyan md:text-5xl lg:text-6xl">Discover The Future</span>
              <span className="mt-2 block text-3xl text-white md:text-4xl lg:text-5xl">Of Innovation</span>
            </h1>
            
            <p className="mb-8 text-center text-lg text-white md:text-xl lg:text-left">
              Transform your ideas into reality with our cutting-edge solutions and expert team.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <button 
                className="transform cursor-pointer border-2 rounded-lg bg-red px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2"
                aria-label="Apply Now"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;