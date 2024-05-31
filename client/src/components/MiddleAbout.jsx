import React from 'react'

const MiddleAbout = () => {
  return (
    <div className="about-section">
      <div className="about-section-left">
        <h4>MIND, BODY AND SOUL</h4>
        <h1>Luxury salon where you will feel unique</h1>
        <p>
          Congue augue sagittis egestas integer velna purus purus magna nec
          suscipit and egestas magna an aliquam ipsum vitae and purus justo
          ligula ipsum primis cubilia gravida augue and luctus egestas vitae
          molestie donec libero
        </p>
        <div className="about-image-left">
        <img
          src="/assets/images/about-salon-03.jpg"
          alt="about-left"
        />
        </div>
      </div>

      <div className="about-section-right">
        <div className="about-image-right">
          <img src="/assets/images/about-salon-02.jpg" alt="about-right" />
        </div>
        <p>
          Adipisicing elit. Ab, nisi. Vitae ullam est, facere id quia, porro
          fuga aut cupiditate voluptas repellendus eum saepe suscipit atque
          quasi maxime, consequatur labore.
        </p>
      </div>
    </div>
  );
}

export default MiddleAbout