import React from 'react';
import { Carousel } from 'antd';
import one from '../assets/eggloo-catering-1.jpg';
import two from '../assets/eggloo-catering-2.jpg';
import three from '../assets/eggloo-catering-3.jpg';
import four from '../assets/eggloo-catering-4.jpg';

const contentStyle = {
  margin: 0,
  height: '300px',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselEggloo = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="isolate bg-white px-6 py-2 sm:py-4 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Carousel className='py-6' autoplay afterChange={onChange}>
          <div>
            <img style={contentStyle} src={one} />
          </div>
          <div>
            <img style={contentStyle} src={two} />
          </div>
          <div>
            <img style={contentStyle} src={three} />
          </div>
          <div>
            <img style={contentStyle} src={four} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default CarouselEggloo;