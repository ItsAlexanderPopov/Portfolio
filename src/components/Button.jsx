import React, {useState} from 'react'

const Button = ({text}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <button
        className={`relative bg-mainColor text-secondaryColor p-[1rem] text-[1rem] 
        hover:text-thirdColor hover:bg-mainColor outline outline-2 hover:outline-secondaryColor 
        font-bold hover:tracking-tighter tracking-wider rounded-md
        active:text-secondaryColor active:text-[0.8rem] active:bg-lightMainColor active:transition-none active:tracking-wider
        duration-500 w-[11.25rem] h-[3.5rem] flex justify-center items-center ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <span className={`absolute left-0 top-0 transform ${!isHovered ? '-translate-x-[1.5rem]' : 'translate-x-[0.75rem]'} 
        pointer-events-none font-normal text-[2.4rem] text-thirdColor transition-transform duration-500`}>
        {'>'}
        </span>
        <span className={`absolute right-0 top-0 transform ${!isHovered ? 'translate-x-[1.563rem]' : '-translate-x-[0.75rem]'}
        pointer-events-none font-normal text-[2.4rem] text-thirdColor transition-transform duration-500`}>
        {'<'}
        </span>
        {text}
    </button>
  )
}

export default Button