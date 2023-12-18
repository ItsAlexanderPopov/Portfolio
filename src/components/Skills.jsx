import React from 'react'



const Skills = () => {
  const frontendLogos=[
  {
    id: 1,
    src: 'SkillLogos/html5.svg',
    alt: 'HTML5',
    logoName: 'HTML'
  },{
    id: 2,
    src: 'SkillLogos/css3.svg',
    alt: 'CSS3',
    logoName: 'CSS'
  },{
    id: 3,
    src: 'SkillLogos/javascript.svg',
    alt: 'JS/TS',
    logoName: 'JS / TS'
  },{
    id: 4,
    src: 'SkillLogos/jquery.svg',
    alt: 'jQuery',
    logoName: 'jQuery'
  },{
    id: 5,
    src: 'SkillLogos/react.svg',
    alt: 'React',
    logoName: 'React'
  },{
    id: 6,
    src: 'SkillLogos/react.svg',
    alt: 'React Native',
    logoName: 'React Native'
  },{
    id: 7,
    src: 'SkillLogos/tailwindcss.svg',
    alt: 'Tailwind',
    logoName: 'Tailwind'
  },{
    id: 8,
    src: 'SkillLogos/flutter.svg',
    alt: 'Flutter',
    logoName: 'Flutter'
  },{
    id: 9,
    src: 'SkillLogos/nextjs.svg',
    alt: 'NextJS',
    logoName: 'Next.js'
  },
]
const backendLogos=[
  {
    id: 1,
    src: 'SkillLogos/java.svg',
    alt: 'Java',
    logoName: 'Java'
  },{
    id: 2,
    src: 'SkillLogos/python.svg',
    alt: 'Python',
    logoName: 'Python'
  },{
    id: 3,
    src: 'SkillLogos/csharp.svg',
    alt: 'C#',
    logoName: 'C#'
  },{
    id: 4,
    src: 'SkillLogos/express.svg',
    alt: 'Express',
    logoName: 'Express'
  },{
    id: 5,
    src: 'SkillLogos/restapi.svg',
    alt: 'Rest API',
    logoName: 'RestAPI'
  },{
    id: 6,
    src: 'SkillLogos/mongodb.svg',
    alt: 'MongoDB',
    logoName: 'MongoDB'
  },{
    id: 7,
    src: 'SkillLogos/mysql.svg',
    alt: 'MySQL',
    logoName: 'MySQL'
  }
]
const toolsLogos=[
  {
    id: 1,
    src: 'SkillLogos/git.svg',
    alt: 'GIT',
    logoName: 'GIT'
  },{
    id: 2,
    src: 'SkillLogos/nodejs.svg',
    alt: 'Node.js',
    logoName: 'Node.js'
  },{
    id: 3,
    src: 'SkillLogos/postman.svg',
    alt: 'Postman',
    logoName: 'Postman'
  },{
    id: 4,
    src: 'SkillLogos/selenium.svg',
    alt: 'Seleniun',
    logoName: 'Seleniun'
  },{
    id: 5,
    src: 'SkillLogos/docker.svg',
    alt: 'Docker',
    logoName: 'Docker'
  },{
    id: 6,
    src: 'SkillLogos/aws.svg',
    alt: 'AWS',
    logoName: 'AWS'
  },
  
]
  return (
    <section id='Skills' className='flex flex-col gap-12 min-h-screen'>
        <h2 className='-mb-8 text-center'>{`<Skills>`}</h2>
        <div className="slider">
          <div className="slide-track-first">
            {frontendLogos.map((logo) => (
              <div key={logo.id} className='slide'>
                <img className='max-w-max' src={logo.src} alt={logo.alt} />
                <p className='text-center'>{logo.logoName}</p>
              </div>
            ))}
            {frontendLogos.map((logo) => (
              <div key={logo.id} className='slide'>
                <img className='max-w-max' src={logo.src} alt={logo.alt} />
                <p className='text-center'>{logo.logoName}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="slider">
          <div className="slide-track-second">
            {backendLogos.map((logo) => (
              <div key={logo.id} className='slide'>
                <img className='max-w-max' src={logo.src} alt={logo.alt} />
                <p className='text-center'>{logo.logoName}</p>
              </div>
            ))}
            {backendLogos.map((logo) => (
              <div key={logo.id} className='slide'>
                <img className='max-w-max' src={logo.src} alt={logo.alt} />
                <p className='text-center'>{logo.logoName}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="slider">
          <div className="slide-track-third">
            {toolsLogos.map((logo) => (
              <div key={logo.id} className='slide'>
                <img className='max-w-max' src={logo.src} alt={logo.alt} />
                <p className='text-center'>{logo.logoName}</p>
              </div>
            ))}
            {toolsLogos.map((logo) => (
              <div key={logo.id} className='slide'>
                <img className='max-w-max' src={logo.src} alt={logo.alt} />
                <p className='text-center'>{logo.logoName}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Skills