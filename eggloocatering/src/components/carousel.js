import React from 'react';
import { Carousel } from 'antd';
import one from '../assets/eggloo-catering-1.png';
import two from '../assets/eggloo-catering-2.png';
import three from '../assets/eggloo-catering-3.png';
import four from '../assets/eggloo-catering-4.png';

const contentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  height: '500px',
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
        <Carousel className='py-6' autoplay infinite afterChange={onChange}>
          <div>
            <img style={contentStyle} src={one} alt='eggloo1'/>
          </div>
          <div>
            <img style={contentStyle} src={two} alt='eggloo2'/>
          </div>
          <div>
            <img style={contentStyle} src={three} alt='eggloo3'/>
          </div>
          <div>
            <img style={contentStyle} src={four} alt='eggloo4'/>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default CarouselEggloo;