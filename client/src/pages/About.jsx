import React from "react";
import TopBanner from "../components/TopBanner";
import MiddleAbout from "../components/MiddleAbout";
import Button from "../components/Button";
import ImageGallery from "../components/ImageGallery";
import ServiceIcon from "../components/ServiceIcon";

const About = () => {
    const styleBtn = {
    textAlign: "center",
    padding: "4rem",
  };
  
  return (
    <>
      <TopBanner
        heading="About SaLoon"
        someLine="Luxury salon where you will feel unique and special"
        imageUrl="linear-gradient(rgba(4,9,30,0.3), rgba(4,9,30,0.2)), url('/assets/images/about-banner.jpg')"
      />
      <MiddleAbout />
      <div style={styleBtn}>
        <Button
          route="/book"
          name="BOOK APPOINTMENT"
          bgColor="white"
          color="black"
        />
      </div>

      <ImageGallery/>
      <div style={styleBtn}>
        <Button
          route="/gallery"
          name="VISIT OUR GALLERY"
          bgColor="white"
          color="black"
        />
      </div>
      <ServiceIcon/>
    </>
  );
};

export default About;
