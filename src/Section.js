import React from 'react';
import './Section.css';
import { IoPricetagOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
 
const Section = () => {
  return (
    <div className="section">
      <div className="section-left">
        <h1>Boost your Ranking With SEO Service</h1>
        <p>We offer flexible and comprehensive online marketing plans and strategies For your brand Specifically.</p>
      
      </div>
      <div className="section-right">
        <input type="text" placeholder="Web URL" />
        <input type="email" placeholder="Email" />
        <div className='an-button'>
          <button className=''>Analyze</button>
        </div>
      </div>
    </div>
  );
};
 
export default Section;