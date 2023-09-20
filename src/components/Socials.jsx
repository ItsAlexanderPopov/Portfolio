import React from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si'

const Socials = () => {
  return (
    <div className='flex gap-8 mt-2 text-4xl'>
      <a href='https://www.linkedin.com/in/-alexanderpopov/' target='_blank'>
       <SiLinkedin/>
      </a>
      <a href='https://github.com/ItsAlexanderPopov' target='_blank'>
       <SiGithub/>
      </a>
    </div>
  )
}

export default Socials