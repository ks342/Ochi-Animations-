import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full min-h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-20 md:mt-32 lg:mt-40 px-4 md:px-10 lg:px-20">
        {["We Create","Eye-Opening","Presentations"].map((item,index)=>{
          return (
            <div className="masker" key={index}> 
              <div className='w-fit flex'>
                {index === 1 && (
                  <motion.div 
                    initial={{width:0}} 
                    animate={{width:"9vw"}} 
                    transition={{ ease:[0.76,0,0.24,1],duration:1}}
                    className='mr-[1vw] rounded-md w-[9vw] h-[5.7vw] relative top-[1.5vw] bg-red-500 hidden md:block'
                  ></motion.div>
                )}
                <h1 className='flex uppercase items-center text-[15vw] md:text-[12vw] lg:text-[9vw] leading-[12vw] md:leading-[9vw] lg:leading-[7.5vw] h-full font-["FoundersGrotesk"] font-medium'>{item}</h1>
              </div>
            </div>
          ); 
        })}     
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-8 flex flex-col md:flex-row justify-between items-center py-3 px-4 md:px-10 lg:px-20 gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item,index)=>(
            <p key={index} className='text-sm md:text-md font-light tracking-wide leading-none text-center md:text-left'>{item}</p>
          ))}
        </div>
        <div className='start flex items-center'>
          <div className='px-4 py-1 font-light border text-sm md:text-md capitalize rounded-full'>start the project</div>
          <div className='w-8 h-8 flex items-center justify-center border border-zinc-500 rounded-full ml-2'> 
            <span className='rotate-[45deg]'>
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default LandingPage