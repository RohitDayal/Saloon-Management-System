import React from 'react'
import TopBanner from '../components/TopBanner'
import ServiceList from '../components/ServiceList';
import Button from '../components/Button';
import ImageGallery from '../components/ImageGallery';
import SalonSchedule from '../components/SalonSchedule ';

const Services = () => {
  const styleBtn = {
    textAlign: "center",
    padding: "4rem",
  };
  
  return (
    <>
      <TopBanner
        heading="Hair Services"
        someLine="It's time to give your hair some love"
        imageUrl="linear-gradient(rgba(4,9,30,0.3), rgba(4,9,30,0.2)), url('/assets/images/hair-services-banner.jpg')"
      />
      <ServiceList />
      <div style={styleBtn}>
        <Button
          route="/book"
          name="BOOK ONLINE"
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

      <SalonSchedule/>
    </>
  );
}

export default Services