import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1 '>
        <div className="textstructure mt-40 px-20">

            {["We Create","Eye-Opening","Presentations"].map((item,index)=>{
                return             <div className="masker"> 
                <h1 className='uppercase text-9xl tracking-tight leading-[8vw] font-["FoundersGrotesk"] font-medium'>{item} </h1>
            </div>

            })}     
        </div>
        <div className="border-t-[1px] border-zinc-700 mt-5 flex justify-between items-center py-5 px-20 ">
      {[
        "For public and private comapnies",
        "From the first pitch to IPO",
      ].map((item,index)=>(
<p className='text-md font-light tracking-wide leading-none'>{item}</p>
      ))}
      <div className='start flex items-center '>
        <div className='px-4 py-1  font-light  border text-md capitalize rounded-full'>  start the project</div>
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