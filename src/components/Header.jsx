import React, { useEffect } from 'react'
import Socials from './Socials'
import gsap from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";
import {Button} from './'

gsap.registerPlugin(TextPlugin);

const Header = () => {
  return (
    <section id='Home' className='bg-mainColor flex lg:justify-between lg:flex-row lg:items-center justify-center flex-col-reverse mx-20 lg:mx-10 2xl:mx-0 min-h-screen'>
        <div className='flex flex-col gap-3 box-border'>
          <h1>
            I am <br className='lg:hidden block'/><span className='typewrite font-[600] text-thirdColor'> </span> <span className='cursorAnimation'>{`<`}</span> <br className='lg:hidden block'/>Developer
          </h1>
          <p className='text-secondaryColor'>
            Hello my name is Alex Popov,<br/> always ready to bring ideas to life.
          </p>
          <div className='my-4'>
            <Socials/>
          </div>
            <Button text='Download CV'/>
      </div>
      <div className='mr-[10%] bg-secondaryColor px-20 pt-2 rounded-lg portrait overflow-auto border-[6px] border-thirdColor'>
        <img src='portrait.png' alt='portrait' className='opacity-90 scale-75 lg:scale-100' width={350}/>
      </div>
    </section>
  )
}

export default Header