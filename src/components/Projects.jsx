import React from 'react'
import ProjectCards from './ProjectCards'
import webIMG from '../assets/webIMG.jpg'
import PortfilioIMG from '../assets/project-portfolio-ps.png'
import EchoIMG from '../assets/project-echo-ps.png'
import DashboardIMG from '../assets/project-dashboard-ps.png'
import SimonGameIMG from '../assets/project-simon-ps.png'

const Projects = () => {
  return (
    <section id='Projects'>
      <p className='text-8xl mb-20'>Projects</p>

      <ProjectCards
        image={PortfilioIMG}
        title={'Portfolio'}
        date={'September 2023'}
        desc={'My own personal portfolio, includes various self made UI and modern clean design to showcase my great pieces of code'}
        skills={['React', 'Vite', 'JavaScript', 'CSS', 'GSAP']}
        linkGit={'https://github.com/ItsAlexanderPopov/Portfolio '}
        linkDemo={'/'}
      />

      <ProjectCards
        image={EchoIMG}
        title={'Echo'}
        date={'July 2023'}
        desc={'View our unique digital time capsule on Echo, and post your own piece by logging in with your Google account'}
        skills={['React', 'NextJS', 'JavaScript', 'CSS', 'Tailwind' ,'MongoDB', 'NextAuth']}
        linkGit={'https://github.com/ItsAlexanderPopov/Echo'}
        linkDemo={'https://echo-ap.vercel.app'}
      />

      <ProjectCards
        image={DashboardIMG}
        title={'Dashboard'}
        date={'August 2023'}
        desc={'Dashboards never looked as easy to use as this one, get a look at what could possibly be yours, To handle your business data more effeciently than ever.'}
        skills={['React', 'Vite', 'Auth', 'CSS', 'MongoDB', 'Electron', 'Tailwind', 'Syncfusion']}
        linkGit={'https://github.com/ItsAlexanderPopov/dashboard'}
        linkDemo={'https://dashboard-ap.vercel.app'}
      />

      <ProjectCards
        image={webIMG}
        title={'Folder Protection'}
        date={'September 2023'}
        desc={`Personally made for an Escape Room puzzle, Keep your "Rocket" folder on desktop hidden, and access it through the desktop application's password.`}
        skills={['React', 'Electron', 'CSS']}
        linkGit={'https://github.com/ItsAlexanderPopov/Folder-Protection'}
        linkDemo={'https://github.com/ItsAlexanderPopov/Folder-Protection'}
      />

      <ProjectCards
        image={SimonGameIMG}
        title={'Simon Game'}
        date={'July 2023'}
        desc={'The classic and popular Simon Game, test your memory power in both playable game difficulties.'}
        skills={['Javascript', 'Jquery', 'CSS', 'HTML']}
        linkGit={'https://github.com/ItsAlexanderPopov/Simon-game'}
        linkDemo={'https://simon-game-ap.vercel.app'}
      />

    </section>
  )
}

export default Projects