import React from 'react'

const About = () => {
  return (
    <section id='About' className='flex justify-end'>
      <div className='screen-h text-xl flex flex-col'>
        <p className='text-8xl mb-20'>About Me</p>
        <p className='whitespace-pre-line leading-8'>
          {`
            Hello! I'm Alex Popov, a passionate and creative self taught full-stack developer.
            I implement innovative ideas into functional and user-friendly applications.
            With a strong foundation in both front-end and back-end modern technologies.
            Continually learning and refining my skills and techniques to produce clean and effecient up to date code.
            As a collaborative team player, I love to share and listen for outstanding development ideas, 
            Whether working independently or as part of a team, I'm commited to produce high quality work to my clients.
        `}
        </p>
      </div>
    </section>
  )
}

export default About