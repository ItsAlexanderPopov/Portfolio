import React from 'react'
import Socials from './Socials'

const Header = () => {
  const textArr = ["Fullstack", "Web", "Software"]
  
  return (
    <section id='Home' className='screen-h bg-mainColor p-36'>
      <p className='text-6xl'> 
        Hello, I'm
      </p>
      <p className='text-5xl text-secondaryColor ml-40'>
        Alex Popov
      </p>
      <p className='text-2xl ml-8'>
        I am Fullstack Developer, Web Developer, Software Developer
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