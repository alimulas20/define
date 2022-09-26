import React,{useEffect,useState} from 'react';
import logo from '../../images/definex-logo.svg';
import buttonImage from '../../images/icon.jpg'
import './index.css'; 
const Navbar = () => {
  const [isOpen,setOpen]=useState(!window.matchMedia("(max-width: 820px)").matches);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 820px)").matches
  )


  useEffect(() => {
    window
    .matchMedia("(max-width: 820px)")
    .addEventListener('change', e => setMatches( e.matches ));
    
  }, []);
  useEffect(() => {
    window
    .matchMedia("(max-width: 820px)")
    .addEventListener('change', e => setOpen( !e.matches ));
    
  }, []);
  return (
   
     <nav className='navbar'>
        <img src={logo} alt="logo" className='navbar__image'/>
        <div className='navbar__top--type'>
        <button><img className='button__image' src={buttonImage} alt="buttonImage" onClick={(e)=>{setOpen(!isOpen)}}/></button>
          {isOpen&&
            <ul className={!matches ? 'navbar__list' : 'navbar__list2'}>
            {["About","Services","DefineX Agenda","Insights","Careers"].map((li,i)=><li className="navbar__list--item" key={li+i}>{li}</li>)}
            </ul>
          }
        </div>
     </nav>
  
  );
};
  
export default Navbar;