import React from 'react'
import iconB from '../assets/backend.png'
import iconF from '../assets/frontend.png'
import iconT from '../assets/tools.png'
import iconGS from '../assets/GSlogo.png'
import iconAPI from '../assets/api.png'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiLogoNodejs} from 'react-icons/bi'
import { SiSelenium, SiDocker, SiIntellijidea, SiJavascript, SiNextdotjs, SiPostman,
SiElectron, SiCss3, SiTailwindcss, SiPython, SiCsharp, SiMongodb, SiExpress} from 'react-icons/si'
import { TbBrandVscode, TbBrandMysql, TbBrandThreejs} from 'react-icons/tb'
import { FaJava, FaReact} from 'react-icons/fa'

const Skills = () => {
  return (
    <section id='Skills' className='screen-h'>
      <p className='text-8xl mb-20'>Skills</p>
      <div className='flex justify-around'>
        <div className='flex flex-col gap-6 text-center items-center'>
         <h2>Frontend</h2>
          <img
            src={iconF}
            alt='Frontend'
            height={50}
            width={50}
          />
          <p className='flex items-center gap-1'>Javascript <SiJavascript/> </p>
          <p className='flex items-center gap-1'>React <FaReact/> </p>
          <p className='flex items-center gap-1'>Next.js <SiNextdotjs/></p>
          <p className='flex items-center gap-1'>Electron <SiElectron/> </p>
          <p className='flex items-center gap-1'>CSS <SiCss3/> </p>
          <p className='flex items-center gap-1'>Tailwind <SiTailwindcss/></p>
          <p className='flex items-center gap-1'>GSAP <img src={iconGS} height={18} width={18} alt="GSAP"/></p>
          <p className='flex items-center gap-1'>ThreeJS~ <TbBrandThreejs/></p>
        </div>

        <div className='flex flex-col gap-6 text-center items-center'>
          <h2>Backend</h2>
          <img
            src={iconB}
            alt='Backend'
            height={50}
            width={50}
          />
          <p className='flex items-center gap-1'>Java<FaJava/> </p>
          <p className='flex items-center gap-1'>Python <SiPython/> </p>
          <p className='flex items-center gap-1'>C# <SiCsharp/> </p>
          <p className='flex items-center gap-1'>MongoDB <SiMongodb/> </p>
          <p className='flex items-center gap-1'>MySQL~ <TbBrandMysql/> </p>
          <p className='flex items-center gap-1'>Restful API <img src={iconAPI} alt="API"/></p>
          <p className='flex items-center gap-1'>Express~ <SiExpress/> </p>
        </div>

        <div className='flex flex-col gap-6 text-center items-center'>
         <h2>Tools</h2>
          <img
            src={iconT}
            alt='Tools'
            height={50}
            width={50}
          />
          <p className='flex items-center gap-1'>GIT <AiOutlineGithub/> </p>
          <p className='flex items-center gap-1'>Node <BiLogoNodejs/> </p>
          <p className='flex items-center gap-1'>Postman <SiPostman/></p>
          <p className='flex items-center gap-1'>Selenium <SiSelenium/> </p>
          <p className='flex items-center gap-1'>Docker~ <SiDocker/> </p>
          <p className='flex items-center gap-1'>VS Code <TbBrandVscode/> </p>
          <p className='flex items-center gap-1'>IntelliJ <SiIntellijidea/></p>
        </div>

      </div>
    </section>
  )
}

export default Skills