import React, { useState, useEffect} from 'react'
import gsap from 'gsap'
import logo from '../assets/Logo1.png'
const Navbar = () => {

  const [activeLink, setActiveLink] = useState(0);

  const underlineAnimation = (index) => {
    gsap.timeline()
    .to(".nav-underline", {scaleX: 0.02, duration:0.1})
    .to(".nav-underline", {x: 120 * (index), duration:0.1, delay:0.7})
    .to(".nav-underline", {scaleX: 1, duration:0.1, delay:0.7})
  }


  useEffect(() => {
    let sections = document.querySelectorAll('section')
    const handleScroll = event => {
      //console.log(sections)
      sections.forEach((sec, index) => { 
        let offset = window.scrollY;
        let top = sec.offsetTop - 49;
        let height = sec.offsetHeight;
        console.log("index: " + index + " offset:" + offset + " top: " + top + " height: " + height +" "+ (offset >= top && offset < top + height && activeLink !== index))
        if( offset >= top && offset < top + height && activeLink !== index){
          setActiveLink(index);
          underlineAnimation(index)
        }
      })
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className='sticky top-0 bg-lightMainColor box-border py-2 z-50'>
      <div className='flex justify-between max-w items-center'>
        <a className='lg:block hidden text-2xl cursor-pointer font-bold' href='/'><img src={logo} alt='Alex Popov' width={100}/></a>
        <div className='flex nav-container relative'>
          <a className='nav-btn' href='#Home'>Home</a>
          <a className='nav-btn' href='#About'>About</a>
          <a className='nav-btn' href='#Skills'>Skills</a>
          <a className='nav-btn' href='#Projects'>Projects</a>
          {/* <a className='nav-btn' href='#Contact'>Contact</a> */}
          <span className='nav-underline'></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar