import React from 'react'
// import ImgCompo from './ImgCompo';

const ServiceIcon = () => {
        const imagePaths = [
          "/assets/icons/facial-massage.png",
          "/assets/icons/eyelashes.png",
          "/assets/icons/human-eyebrow.png",
          "/assets/icons/beauty.png",
          "/assets/icons/wax.png",
          "/assets/icons/nails-polish.png"
       
        ];
  return (
    <>
      <div>
        <div className="service-icon-top-sec">
          <p>INDULGE IN YOURSELF</p>
          <h1>Feel Yourself More Beautiful</h1>
          <p>
            Congue augue sagittis egestas integer velna purus purus magna nec
            suscipit and egestas magna aliquam ipsum vitae purus justo lacus
            ligula and ipsum lacinia primis cubilia
          </p>
        </div>
        <div className="service-icon-bottom">
          {imagePaths.map((path, index) => (
            <div key = {index} >
            <img src= {path} alt="" className='service-icon' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServiceIcon