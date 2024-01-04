import React from 'react';
import Carousel from '@/components/common/Carousel';

function Banner() {
  const carouselItems = [
    {
      imageUrl: '/images/carouselMobile1.png',
      titleStyle: { background: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)' },
      onButtonClick: () => window.open('https://www.tedkoller.com/gallery', '_blank')
    },
    {
      imageUrl: '/images/carouselMobile2.png',
      titleStyle: { background: 'linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)' },
      onButtonClick: () => {/* handle click for Web Design */}
    },
    {
      imageUrl: '/images/carouselMobile3.png',
      titleStyle: { background: 'linear-gradient(to right, #667eea 0%, #764ba2 100%)' },
      onButtonClick: () => {/* handle click for Video Production */}
    }
  ].map(item => ({ ...item, isActive: false }));

  return (
    <div>
      <Carousel items={carouselItems} />
    </div>
  );
}

export default Banner;
