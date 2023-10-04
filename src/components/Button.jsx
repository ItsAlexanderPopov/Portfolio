import React, {useState} from 'react'

const Button = ({text}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <button
        className={`relative bg-mainColor text-secondaryColor p-[16px] text-[16px] 
        hover:text-thirdColor hover:bg-mainColor outline outline-2 hover:outline-secondaryColor 
        font-bold hover:tracking-tighter tracking-wider 
        duration-500 w-[180px] flex justify-center ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <span className={`absolute left-0 top-0 transform ${!isHovered ? '-translate-x-[24px]' : 'translate-x-[12px]'} 
        pointer-events-none font-normal text-[40px] text-thirdColor transition-transform duration-500`}>
        {'>'}
        </span>
        <span className={`absolute right-0 top-0 transform ${!isHovered ? 'translate-x-[25px]' : '-translate-x-[12px]'}
        pointer-events-none font-normal text-[40px] text-thirdColor transition-transform duration-500`}>
        {'<'}
        </span>
        {text}
    </button>
  )
}

export default Button