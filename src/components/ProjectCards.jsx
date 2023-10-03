import React from 'react'
import {BsGithub , BsArrowUpRightCircle} from 'react-icons/bs'
import {Image3D} from './'
const ProjectCards = ({image, title, desc, skills, linkGit, linkDemo}) => {
  return (
    <div className='bg-lightMainColor rounded-lg mb-12 flex flex-row odd:flex-row-reverse w-2/3 m-auto shadow-project shadow-black p-4'>
        <div className='md:flex hidden w-full h-[fit] justify-center items-start m-4'>
            <a href={linkDemo ? linkDemo:linkGit} target='_blank'><Image3D image = {image} height = {'350px'} width = {'450px'} objectFit={'cover'}/></a>
        </div>
        
        <div className='flex flex-col w-full text-secondaryColor justify-center self-center text-center gap-4 h-[350px]'>
            <h3 className='font-bold'>{title}</h3>
            <p className='text-slate-400 w-3/4 self-center'>{desc}</p>
            {/* Skill Cards */}
            <div className='flex flex-wrap justify-center gap-3 w-full m-auto'>
            {skills.map((text)=>{
              return(
                <p key={text} className='px-2 py-1 rounded-md bg-slate-400 text-lightMainColor'>{text}</p>
              )
            })}
            </div>
            {/* Links */}
            <div className='text-xl flex gap-20 justify-center'>
              <a className='flex justify-center gap-3 items-center hover:text-thirdColor duration-300 ease-in-out' href={linkGit} target="_blank"> GitHub<BsGithub/></a>
              {linkDemo ? <a className='flex justify-center gap-3 items-center hover:text-thirdColor duration-300 ease-in-out'
               href={linkDemo} target="_blank"> Live Demo<BsArrowUpRightCircle/></a> : null}
            </div>

        </div>
    </div>
  )
}

export default ProjectCards