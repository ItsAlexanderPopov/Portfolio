import React from 'react'

const About = () => {
  return (
    <section id='About' className='flex lg:justify-around justify-center lg:items-center sm:min-h-screen min-h-[50vh] lg:flex-row flex-col-reverse mx-20 lg:mx-0'>
    <div className='flex justify-center items-center gap-8'>
      <div className='max-[300px]:hidden flex lineDesc lg:static absolute lg:left-0 left-10 flex-col justify-around h-[400px] text-lightMainColor [&_p:nth-child(1)]:text-thirdColor'>
        <p>Idea</p>
        <p>Coding . . .</p>
        <p>Product</p>
      </div>
      <div className='min-[300px]:flex hidden flex-col about items-center lg:items-start'>
        <img src='About-Line1.svg' width={200} className='translate-y-10'/>
        <img
          src='idea.svg'
          className='codeIcon lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] -ml-[150px] -mt-[10px] lg:-ml-0 lg:-mt-0'
          style={{ transform: 'translateY(-365px) translateX(130px)' }}
        />
      </div>
    </div>
      <div className='flex flex-col'>
        <h2 className='mb-4 text-center lg:text-start'>{'<About Me>'}</h2>
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