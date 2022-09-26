import React from 'react';
import image1 from '../../images/footerImage1.svg';
import image2 from '../../images/footerImage2.svg';
import image3 from '../../images/footerImage3.svg';
import image4 from '../../images/footerImage4.svg';
import './index.css'; 
const Footer = () => {
  return (
   
     <div className='footer'>
       <p className='footer__text'>Our Values</p>
       <div className='footer__list'>
        <div className='footer__list--element'>
          <img src={image1} alt="footerimage" />
          <p>Driven by impact</p>
        </div>
        <div className='footer__list--element'> 
          <img src={image2} alt="footerimage" />
          <p>Best environment for best people</p>
        </div>
        <div className='footer__list--element'>
          <img src={image3} alt="footerimage" />
          <p>Future in mind</p>
        </div>
        <div className='footer__list--element'>
          <img src={image4} alt="footerimage" />
          <p>Define next</p>
        </div>
       </div>
     </div>
  
  );
};
  
export default Footer;