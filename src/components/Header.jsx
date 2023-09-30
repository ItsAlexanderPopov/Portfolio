import React, { useEffect } from 'react'
import Socials from './Socials'
import gsap from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";
import {Button} from './'

gsap.registerPlugin(TextPlugin);

const Header = () => {
  // GSAP animation typewrite
  useEffect(()=> {
  const typewriteTextArr = ["Fullstack", "Web", "Software"]
  let cursorAnimation = gsap.to('.cursorAnimation', {opacity: 0, ease:"power2.inOut", repeat: -1, duration:0.5, repeatDelay:0.3})
  
  let typewrite = gsap.timeline({repeat: -1})
  typewriteTextArr.forEach(word => {
      let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
      tl.to('.typewrite', {duration: 1, text: word})
      typewrite.add(tl)
  })
  },[])
  return (
    <section id='Home' className='screen-h bg-mainColor flex lg:justify-between lg:flex-row items-center justify-center flex-col-reverse'>
        <div className='flex flex-col gap-3'>
          <h1>
            I am <span className='typewrite font-[600] text-thirdColor'> </span> <span className='cursorAnimation'>{`<`}</span> Developer
          </h1>
          <p className='text-secondaryColor'>
            Hello my name is Alex Popov, based in Israel.
          </p>
          <div className='my-4'>
            <Socials/>
          </div>
            <Button text='Download CV'/>
      </div>
      <div className='border-2 w-96 h-96 mr-[10%]'>

      </div>
    </section>
  )
}

export default Header