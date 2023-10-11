import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import {Image3D} from './'
const ProjectCards = ({image, title, desc, skills, linkGit, linkDemo}) => {
  return (
    <div className='bg-lightMainColor rounded-lg mb-12 w-2/3 m-auto shadow-project shadow-black p-4 
    scrollTrigger-P translate-x-40 odd:-translate-x-40 flex flex-row odd:flex-row-reverse opacity-0'>
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
            <div className='text-xl flex justify-around'>
              <a className='flex justify-center gap-3 items-center hover:text-thirdColor duration-300 ease-in-out underline underline-offset-2' href={linkGit} target="_blank"> GitHub<BsGithub/></a>
              {linkDemo ? <a className='flex justify-center gap-3 items-center hover:text-thirdColor duration-300 ease-in-out underline underline-offset-2'
               href={linkDemo} target="_blank"> Live Demo<BiLinkExternal/></a> : null}
            </div>

        </div>
    </div>
  )
}

export default ProjectCards