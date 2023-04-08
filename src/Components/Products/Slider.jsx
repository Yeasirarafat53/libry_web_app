import React from 'react';
import Slider from 'react-slick';

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <Slider {...settings}>
        <div className="mx-2">
          <img src="product1.jpg" alt="Product 1" />
        </div>
        <div className="mx-2">
          <img src="product2.jpg" alt="Product 2" />
        </div>
        <div className="mx-2">
          <img src="product3.jpg" alt="Product 3" />
        </div>
        <div className="mx-2">
          <img src="product4.jpg" alt="Product 4" />
        </div>
        <div className="mx-2">
          <img src="product5.jpg" alt="Product 5" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;
