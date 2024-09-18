import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import image1  from '../assets/image1.jpg'
const Hero = () => {
  const style = {
    color: "#fde9ff",
    fontWeight: "900",
    paddingBottom: "10px",
    textTransform: "uppercase",
    fontSize: "clamp(3rem, 10vw, 6rem)",
    lineHeight: "0.75em",
    textAlign: "center",
    textShadow:
      "3px 1px 1px #002366, 2px 2px 1px #000000, 4px 2px 1px #002366, " +
      "3px 3px 1px #000000, 5px 3px 1px #002366, 4px 4px 1px #000000, " +
      "6px 4px 1px #002366, 5px 5px 1px #000000, 7px 5px 1px #002366, " +
      "6px 6px 1px #000000, 8px 6px 1px #002366, 7px 7px 1px #000000, " +
      "9px 7px 1px #002366",
  };

  return (
    <div className="bg-blue-200 text-white flex flex-col justify-center items-center h-screen px-6 rounded">
      <div className="flex items-center justify-between w-full max-w-screen-xl">
        <img
          src={image1}
          alt="crypto"
          className="w-1/2 h-auto object-cover m-16"
        />
        <div className="text-center w-1/2 flex flex-col items-start">
          <h1 className="text-6xl font-bold mb-4">
            <span style={style}>Bitflow</span>
          </h1>
          <h1 className="text-4xl mt-2">
            One Platform to
            <span className="text-red-500 font-bold ml-2">
              <Typewriter
                words={['BUY', 'SELL', 'LEARN']}
                loop={true}
                typeSpeed={70}
              />
            </span>
            <span className='ml-2'>Crypto</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
