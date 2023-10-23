import React from 'react'

const About = () => {
  return (
    <section id='About' className='flex lg:justify-between justify-center lg:items-center sm:min-h-screen min-h-[50vh] lg:flex-row flex-col-reverse mx-20 lg:mx-0'>
      <div className='sm:flex hidden flex-col about items-center lg:items-start scale-90 lg:scale-100'>
        <img src='programming.png' className='w-[80px] h-[80px] mt-[390px] opacity-0 codeIcon lg:ml-0 -ml-[310px]'/>
        <img src='About-Line.svg' width={276} className='-mt-[390px] lg:ml-16'/>
        <img id='img-web' src='web-design.png' className='w-[80px] h-[80px] lg:translate-x-[192px] translate-x-[70px] lg:ml-0 -ml-20 mt-6 grayscale'/>
      </div>
      <div className='flex flex-col'>
        <h2 className='mb-4'>{'<About Me>'}</h2>
        <div className='flex flex-col bg-lightMainColor max-h-fit p-4 rounded-lg'>
          <p className='whitespace-pre-line text-slate-400 leading-8 conte-start'>
            {`
              a passionate and creative self taught fullstack developer.
              I turn innovative ideas into functional and user-friendly applications.
              With a solid grasp of frontend and backend modern technologies.
              Constantly improving skills for clean, efficient, up-to-date code.
              I'm a collaborative team player who consistently delivers high-quality work.
          `}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About