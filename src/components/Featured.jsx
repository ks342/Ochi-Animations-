import { motion } from 'framer-motion'
import React, { useState } from 'react';

function Featured() {
  const [hoveredCard, setHoveredCard] = useState(null);
   
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-8xl tracking-tight font-["NeueMontreal"]'>Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          <div 
            onMouseEnter={()=> setHoveredCard("SALIENCELABS")}
            onMouseLeave={()=> setHoveredCard(null)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
              {"SALIENCELABS".split("").map((item,index)=>(
                <motion.span 
                  key={index}
                  initial={{y:"100%"}} 
                  animate={hoveredCard === "SALIENCELABS" ? {y:"0"} : {y:"100%"}} 
                  transition={{ease:[0.22,1,0.36,1],delay:index*.01}}
                  className='inline-block'
                >{item}</motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="Salience Labs"></img>
            </div>
          </div>
          <div 
            onMouseEnter={()=> setHoveredCard("SCARDBOARDSPACESHIP")}
            onMouseLeave={()=> setHoveredCard(null)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
              {"SCARDBOARDSPACESHIP".split("").map((item,index)=>(
                <motion.span 
                  key={index}
                  initial={{y:"100%"}} 
                  animate={hoveredCard === "SCARDBOARDSPACESHIP" ? {y:"0"} : {y:"100%"}} 
                  transition={{ease:[0.22,1,0.36,1],delay:index*.01}}
                  className='inline-block'
                >{item}</motion.span>
              ))}</h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="Scardboard Spaceship"></img>
            </div>
          </div>
        </div>
      </div>

      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          <div 
            onMouseEnter={()=> setHoveredCard("VISE")}
            onMouseLeave={()=> setHoveredCard(null)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
              {"VISE".split("").map((item,index)=>(
                <motion.span 
                  key={index}
                  initial={{y:"100%"}} 
                  animate={hoveredCard === "VISE" ? {y:"0"} : {y:"100%"}} 
                  transition={{ease:[0.22,1,0.36,1],delay:index*.01}}
                  className='inline-block'
                >{item}</motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="Vise"></img>
            </div>
          </div>
          <div 
            onMouseEnter={()=> setHoveredCard("ALLTHINGSGO")}
            onMouseLeave={()=> setHoveredCard(null)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
              {"ALLTHINGSGO".split("").map((item,index)=>(
                <motion.span 
                  key={index}
                  initial={{y:"100%"}} 
                  animate={hoveredCard === "ALLTHINGSGO" ? {y:"0"} : {y:"100%"}} 
                  transition={{ease:[0.22,1,0.36,1],delay:index*.01}}
                  className='inline-block'
                >{item}</motion.span>
              ))}</h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png" alt="All Things Go"></img>
            </div>
          </div>
        </div>
      </div>

      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          <div 
            onMouseEnter={()=> setHoveredCard("TRAWA")}
            onMouseLeave={()=> setHoveredCard(null)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
              {"TRAWA".split("").map((item,index)=>(
                <motion.span 
                  key={index}
                  initial={{y:"100%"}} 
                  animate={hoveredCard === "TRAWA" ? {y:"0"} : {y:"100%"}} 
                  transition={{ease:[0.22,1,0.36,1],delay:index*.01}}
                  className='inline-block'
                >{item}</motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="Trawa"></img>
            </div>
          </div>
          <div 
            onMouseEnter={()=> setHoveredCard("BLACKBOOK")}
            onMouseLeave={()=> setHoveredCard(null)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
              {"BLACKBOOK".split("").map((item,index)=>(
                <motion.span 
                  key={index}
                  initial={{y:"100%"}} 
                  animate={hoveredCard === "BLACKBOOK" ? {y:"0"} : {y:"100%"}} 
                  transition={{ease:[0.22,1,0.36,1],delay:index*.01}}
                  className='inline-block'
                >{item}</motion.span>
              ))}</h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg" alt="Blackbook"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured