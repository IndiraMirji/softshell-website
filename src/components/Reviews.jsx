import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Reviews = () => {
  return (
    <div className="container mb-5" style={{ marginTop: '80px' }}>

      <h2 className="text-center mb-4 fs-1" >Customer Reviews</h2>
      <Carousel showArrows={false} infiniteLoop autoPlay>
        <div>
          <p>"Amazing platform to work with!"</p>
          <p><strong>- Alex</strong></p>
        </div>
        <div>
          <p>"They truly care about customer experience."</p>
          <p><strong>- Jacky</strong></p>
        </div>
        <div>
          <p>"Definitely coming back for future projects!"</p>
          <p><strong>- David</strong></p>
        </div>
      </Carousel>
    </div>
  );
};

export default Reviews;
