import React, { useState, useEffect} from 'react'
import logo from '../assets/Logo1.png'
import gsap from 'gsap'

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
    <nav className='bg-lightMainColor box-border z-50 sm:sticky sm:top-0 fixed bottom-0 top-auto w-full h-fit'>
      <div className='flex sm:justify-between max-w items-center justify-center'>
        <a className='sm:block hidden cursor-pointer' href='/'><img src={logo} alt='<AP/>' width={100}/></a>
        <div className='flex items-center py-4'>
          {sectionNames.map((section, index)=>(
            <a key={index} className={`nav-btn text-sm sm:text-[16px] sm:max-w-[120px] sm:w-[120px] sm:duration-1000 sm:delay-1000 w-[80px] max-w-[80px]  ${activeSection === index ? 'active-nav-btn' : ''}`} href={`#${section}`}>
              {section}
            </a>
          ))}
          <span className='nav-underline mt-4 hidden sm:block'></span>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar