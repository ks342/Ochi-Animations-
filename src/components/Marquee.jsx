import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[17vw] leading-none font-["FoundersGrotesk"] font-semibold uppercase -mb-1 -mt-3'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[17vw] leading-none font-["FoundersGrotesk"] font-semibold uppercase -mt-3 -mb-1 mr-20'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[17vw] leading-none font-["FoundersGrotesk"] font-semibold uppercase -mt-3 -mb-1'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee