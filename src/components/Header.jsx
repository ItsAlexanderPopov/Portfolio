import React, { useEffect } from 'react'
import Socials from './Socials'
import gsap from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const Header = () => {
  // GSAP animation typewrite
  useEffect(()=> {
  const typewriteTextArr = ["Fullstack", "Web", "Software"]
  let cursorAnimation = gsap.to('.cursorAnimation', {opacity: 0, ease:"power2.inOut", repeat: -1})
  
  let typewrite = gsap.timeline({repeat: -1})
  typewriteTextArr.forEach(word => {
      let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
      tl.to('.typewrite', {duration: 1, text: word})
      typewrite.add(tl)
  })
  },[])
  
  return (
    <section id='Home' className='screen-h bg-mainColor mt-40'>
      <p className='text-6xl'> 
        Hello, I'm
      </p>
      <p className='text-5xl text-secondaryColor ml-40'>
        Alex Popov
      </p>
      <p className='text-2xl ml-8'>
        I am <span className='typewrite'> </span> <span className='cursorAnimation'>_</span> Developer
      </p>
      <div className='m-8'>
        <Socials/>
      </div>
      <div className='flex gap-4'>
        <a href = "mailto:itsalexanderpopov@gmail.com" target='_blank' 
        className='py-4 w-40 rounded-xl border-2 hover:bg-mainColor hover:font-bold hover:tracking-wide box-border text-center ease-in-out duration-200'>Send Email</a>
        <button
          type='button' 
          className='py-4 w-40 rounded-xl border-2 hover:bg-mainColor hover:font-bold hover:tracking-wider box-border text-center ease-in-out duration-200'
        >
          {`Download CV`}
        </button>
      </div>
    </section>
  )
}

export default Header