import React from 'react';
import './index.css'; 
const Main = () => {
  return (
   
     <div className='main'>
       
        <div className='main__texts'>
        <div className='main__text--up'>
          <p className='main__text--up__content'>ABOUT</p>
          <p className='main__text--up__firstp'>Lorem ipsum dolor sit amet</p>
          <p className='main__text--up__secondp'>Leveraging  digital channels in a smart and well-thought manner is critical for generating revenues.</p>
        </div>
        <div className='main__text--down'>
          <div className='main__text--down__first'>
          <p className='main__text--down__fa'>Overview</p>
          <p className='main__text--down__fb'>We serve the business world through agendas that are designed to bring impactful solutions to pressing business problems. DefineX is a new generation consulting house and venture builder company that designs and builds the enablers of digital acceleration for the world. </p>
          <p className='main__text--down__fc'>We help our clients solve new business problems, create disruptive products, and integrate next-generation digital solutions. With a track record of shaping visionary strategies, solving challenging business issues, designing innovative solutions, and delivering technology transformation projects, we came to be known for our industry expertise and rigorous focus on client success. We help our clients stay ahead by reinventing themselves in the age of digital disruption.</p>
          </div>
          <div className='main__text--down__second'>
          <p className='main__text--down__sa'>Vision & Mission</p>
          <p className='main__text--down__sb'>Our mission is to enable digital acceleration and liberate the business world through technology. We aspire to define next globally.</p>
          </div>
        </div>
        </div>
        
     </div>
  
  );
};
  
export default Main;