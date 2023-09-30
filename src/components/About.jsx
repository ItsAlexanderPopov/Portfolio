import React from 'react'

const About = () => {
  return (
    <section id='About' className='flex justify-between items-center h-screen'>
      <div className='border-2 w-96 h-96 mr-[10%]'>

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
              I'm a collaborative team player who consistently delivers high-quality work, 
              whether solo or in a team, while actively seeking great ideas.
          `}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About