import React, { useState, useEffect} from 'react'
import gsap from 'gsap'
import {BsArrowUpCircle} from 'react-icons/bs'

const Navbar = () => {

  const underlineAnimation = (index) => {
    gsap.timeline()
    .to(".nav-underline", {scaleX: 0.02, duration:0.1}) // suggestion: fix multiple calls to this function to avoid staggering animations between long scrolls
    .to(".nav-underline", {x: 120 * (index), duration:0.1, delay:1})
    .to(".nav-underline", {scaleX: 1, duration:0.1, delay:0.7})
  }

  const [activeSection, setActiveSection] = useState(0);
  const sectionNames = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    let newActiveSection = 0;
    // Function to handle scroll events
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const yOffset = window.scrollY;
      // Find the current active section
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 56;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (yOffset >= sectionTop && yOffset < sectionBottom) {
          newActiveSection = index;
        }
      });

      if (activeSection !== newActiveSection) {
        setActiveSection(newActiveSection);
        underlineAnimation(newActiveSection);
      }
    };
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial scroll check
    handleScroll();
    // Cleanup: Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <nav className='bg-lightMainColor box-border z-50 sm:top-0 fixed -bottom-[1px] top-auto w-full sm:h-[55px] h-[34px]'>
      <div className='flex md:justify-between max-w items-center justify-center'>
        <a className='md:block hidden cursor-pointer' href='/'><img src='Logo1.svg' alt='<AP/>' width={100}/></a>
        <div className='flex items-center py-4'>
          {sectionNames.map((section, index)=>(
            <a key={index} className={`nav-btn text-[10px] sm:text-[16px] sm:max-w-[120px] sm:w-[120px] sm:duration-1000 sm:delay-1000 w-[60px] max-w-[60px]  
            ${activeSection === index ? 'active-nav-btn' : ''}`} 
            href={`#${section}`}> 
              {section}
            </a>
          ))}
          <span className='nav-underline mt-4 hidden sm:block'></span>
        </div>
      </div>
      <a id='arrowUp' href='#Home' className={`fixed bottom-6 right-6 z-50 duration-500 text-5xl text-secondayColor hidden sm:block
      ${activeSection !== 0 && activeSection !== 4 ? 'visible' : 'invisible'} ${activeSection !== 0 && activeSection !== 4 ? 'opacity-100' : 'opacity-0'}`}>
      <BsArrowUpCircle/></a>
    </nav>
  )
}

export default Navbar