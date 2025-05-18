import React from "react";
import { Carousel } from 'react-responsive-carousel';


const Hero = () => {
  return (
    <>
      <div>
        <div
          style={{
            border: "1px solid black",
            width: "320px",
            margin: "40px auto 0 auto",
            textAlign: "center",
          }}
        >
          Empowering business with strategic solution
        </div>
        <h1
          style={{ textAlign: "center", marginTop: "40px", fontSize: "50px" }}
        >
          Crafting Solutions for <br></br>growth and success
        </h1>
        <p style={{ textAlign: "center" }}>
          The ability to swiftly adapt to changing circumstances and seize
          emerging opportunities.At the<br></br> heart of agility lies strategic
          decision-making and the deployement of innovative solution
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px", // space above buttons
          }}
        >
          <button
            className="btn"
            style={{
              backgroundColor: "#e67300",
              color: "white",
              borderRadius: "20px",
              width: "130px",
              padding: "8px",
            }}
          >
            Get a qoute
          </button>
          <button
            className="btn"
            style={{
              border: "2px solid blue",
              borderRadius: "20px",
              padding: "8px", color:"blue"
            }}
          >
            Discover more
          </button>
        </div>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <div className="box1">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            showArrows={true}
            swipeable={true}
            emulateTouch
            style={{ height: "100%" }}
          >
            <div>
              <img src="/Image1.jpg" alt="Slide 1" />
            </div>
            <div>
              <img src="/Image2.jpg" alt="Slide 2" />
            </div>
            <div>
              <img src="/Image3.jpeg" alt="Slide 3" />
            </div>
          </Carousel>
        </div>

       
      </div>
      </div>
    </>
  );
};

export default Hero;
