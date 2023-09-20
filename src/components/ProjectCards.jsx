import React from 'react'
import {BsGithub , BsArrowUpRightCircle} from 'react-icons/bs'
const ProjectCards = ({image, title, date, desc, skills, linkGit, linkDemo}) => {
  return (
    <div className='bg-lightMainColor rounded-lg mb-12 flex mx-32 shadow-project shadow-lightMainColor'>
        <div className='flex w-full h-fit place-self-center m-4'>
            <img src={image} alt='screnshot' className=' rounded-lg'/>
        </div>
        
        <div className='flex flex-col w-full m-4 text-secondaryColor justify-center text-center gap-8'>
            <p className='text-3xl font-bold'>{title}<span className='text-xl text-slate-400'>{` (${date})`}</span></p>
            <p className='text-slate-400 w-3/4 self-center'>{desc}</p>
            {/* Skill Cards */}
            <div className='flex flex-wrap justify-center gap-3'>
            {skills.map((text)=>{
              return(
                <p key={text} className='rounded-sm w-28 p-1 text-lg text-secondaryColor font-bold shadow-skill shadow-secondaryColor
                mt-2 flex justify-center border-secondaryColor border-2'>{text}</p>
              )
            })}
            </div>
            {/* Links */}
            <div className='text-xl flex gap-20 justify-center'>
              <a className='flex justify-center gap-3 items-center' href={linkGit} target="_blank"> GitHub<BsGithub/></a>
              <a className='flex justify-center gap-3 items-center' href={linkDemo} target="_blank"> Live Demo<BsArrowUpRightCircle/></a>
            </div>

        </div>
    </div>
  )
}

export default ProjectCards