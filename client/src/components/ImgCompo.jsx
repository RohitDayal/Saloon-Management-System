import React from 'react'

const ImgCompo = (props) => {
 const inlineStyle ={
  width: "100%",
  height: "auto",
  display: "block"
 }
  return (
    <div className="img-container">
      <img src={props.path} alt="gallery-photos" style={inlineStyle} />
    </div>
  );
}

export default ImgCompo