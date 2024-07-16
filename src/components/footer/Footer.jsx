import React from 'react';
import { FaHome, FaServicestack, FaProductHunt, FaInfoCircle } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo3.png" alt="" width={120} />

          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them 
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">
            Information
          </span>
          <span className='secondaryText'>Jardiinka Maanabilyo gooladka 6</span>

          <div className="flexCenter f-menu">
            <span><FaHome /> Property</span>
            <span><FaServicestack /> Services</span>
            <span><FaProductHunt /> Product</span>
            <span><FaInfoCircle /> About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
