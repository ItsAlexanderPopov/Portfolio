import React from 'react'
import ProjectCards from './ProjectCards'
import EchoIMG from '../assets/project-echo-ps.png'
import DashboardIMG from '../assets/project-dashboard-ps.png'
import SimonGameIMG from '../assets/project-simon-ps.png'
import FolderProtectorIMG from '../assets/project-folder-protector-ps.png'

const Projects = () => {
  return (
    <section id='Projects' className='py-20'>

      <h2 className='mb-4 text-center'>{'<Projects>'}</h2>

      <ProjectCards
        image={EchoIMG}
        title={'Echo'}
        desc={'View our unique digital time capsule on Echo, and post your own piece by logging in with your Google account'}
        skills={['React', 'NextJS', 'JavaScript', 'CSS', 'Tailwind' ,'MongoDB', 'NextAuth']}
        linkGit={'https://github.com/ItsAlexanderPopov/Echo'}
        linkDemo={'https://echo-ap.vercel.app'}
      />

      <ProjectCards
        image={DashboardIMG}
        title={'Dashboard'}
        desc={'Multifunctional dashboard that has great apps ready-to-use, and various of graphs and grids to showcase and manipulate data cleanly.'}
        skills={['React', 'CSS', 'JavaScript', 'Tailwind', 'Syncfusion']}
        linkGit={'https://github.com/ItsAlexanderPopov/dashboard'}
        linkDemo={'https://dashboard-ap.vercel.app'}
      />

      <ProjectCards
        image={FolderProtectorIMG}
        title={'Folder Protection'}
        desc={`Desktop application that has been made and used as a puzzle in an Escape Room, It reveals a hidden folder when answered the question correctly.`}
        skills={['React', 'Electron', 'CSS']}
        linkGit={'https://github.com/ItsAlexanderPopov/Folder-Protection'}
      />

      <ProjectCards
        image={SimonGameIMG}
        title={'Simon Game'}
        desc={'The classic and popular Simon Game, test your memory power in both playable game difficulties.'}
        skills={['Javascript', 'Jquery', 'CSS', 'HTML']}
        linkGit={'https://github.com/ItsAlexanderPopov/Simon-game'}
        linkDemo={'https://simon-game-ap.vercel.app'}
      />

    </section>
  )
}

export default Projects