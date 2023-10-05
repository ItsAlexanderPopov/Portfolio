import React from 'react';

const Image3D = ({ image, height, width, objectFit }) => {
  const imageStyle = {
    height: height,
    width: width,
    objectFit: objectFit,
  };

  return (
    <img
      style={imageStyle}
      src={image}
      alt='Screenshot'
      className='rounded-lg hover:scale-110 duration-500 grayscale hover:grayscale-0 outline-offset-8 outline-1 outline hover:outline-offset-0'
    />
  );
};

export default Image3D;
// CHAT GPT SOLUTION
/* import React, { useState } from 'react';

function Image3D() {
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (e) => {
    const image = e.target;
    const { width, height, left, top } = image.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const tiltX = (y / height) * 10;
    const tiltY = -(x / width) * 10;
    const transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    setTransformStyle({ transform });
  };

  const handleMouseLeave = () => {
    setTransformStyle({});
  };

  return (
    <div className="relative w-64 h-64">
      <img
        src="your-image-source.jpg"
        alt="Image"
        className="w-full h-full object-cover transition-transform duration-300 transform-gpu hover:scale-110"
        style={transformStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default Image3D; */