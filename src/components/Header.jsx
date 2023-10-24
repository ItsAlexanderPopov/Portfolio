import React from 'react'
import Socials from './Socials'
import {Button} from './'

const Header = () => {
  return (
    <section id='Home' className='bg-mainColor flex lg:justify-between lg:flex-row lg:items-center 
    justify-end flex-col-reverse mx-20 lg:mx-10 2xl:mx-0 min-h-screen items-center'>
      <div className='flex flex-col gap-3 box-border'>
          <h1>
            I am <br className='sm:hidden block'/>
            <span className='typewrite font-[600] text-thirdColor'></span> 
            <span className='cursorAnimation'>{`<`}</span> 
            <br className='xl:hidden block'/>Developer
          </h1>
          <p className='text-secondaryColor'>
            Hello my name is Alex Popov,<br/> always ready to bring ideas to life.
          </p>
          <div className='my-4'>
            <Socials/>
          </div>
            <Button text='Download CV'/>
      </div>
      <div className='mr-[10%] bg-secondaryColor px-20 pt-2 rounded-lg sm:w-fit min-[500px]:w-[150%] w-[200%]
      portrait overflow-auto border-[6px] border-thirdColor lg:scale-100 scale-50'>
        <img src='portrait.png' alt='portrait' className='opacity-90 w-full m-auto' style={{ width: '21.875rem', height: '35.75rem' }}/>
      </div>
    </section>
  )
}

export default Header