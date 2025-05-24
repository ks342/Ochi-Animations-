import React from 'react'

function About() {
  return (
    <div className='w-full p-4 md:p-10 lg:p-20 bg-[#CDEA68] text-black'> 
      <h1 className='font-["NeueMontreal"] text-[6vw] md:text-[5vw] lg:text-[4.5vw] leading-[6vw] md:leading-[5vw] lg:leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className="w-full flex flex-col lg:flex-row gap-5 border-t pt-10 mt-10 md:mt-16 lg:mt-20 border-[#a1b562]">
        <div className='w-full lg:w-1/2'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-["NeueMontreal"]'>Our approach:</h1>
          <button className='flex gap-6 items-center font-["NeueMontreal"] uppercase px-6 py-4 mt-3 bg-zinc-900 rounded-full text-white'>
            Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-3xl overflow-hidden mt-6 lg:mt-0'>
          <img 
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2074&auto=format&fit=crop" 
            alt="Green Creative Design" 
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default About