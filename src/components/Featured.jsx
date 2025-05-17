import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl tracking-tight  font-["NeueMontreal"] '>Featured projects</h1>
        </div>
   <div className='px-10'>
   <div className="cards w-full flex gap-10 mt-10">
            <div className="cardcontainer relative  w-1/2 h-[75vh]  ">
          <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2  -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
            {"SALIENCELABS".split("").map((item,index)=>(
                <span>{item}</span>
            ))}
          </h1>
            <div className='card w-full h-full rounded-xl  overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"></img>
            </div>
             </div>
            <div className="cardcontainer relative  w-1/2 h-[75vh]  ">
            <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2  -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
            {"SCARDBOARDSPACESHIP".split("").map((item,index)=>(
                <span>{item}</span>
            ))}</h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover 'src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"></img>
            </div>
          
            </div>
        </div>
   </div>






   <div className='px-10'>
   <div className="cards w-full flex gap-10 mt-10">
            <div className="cardcontainer relative  w-1/2 h-[75vh]  ">
          <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2  -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
            {"VISE".split("").map((item,index)=>(
                <span>{item}</span>
            ))}
          </h1>
            <div className='card w-full h-full rounded-xl  overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"></img>
            </div>
             </div>
            <div className="cardcontainer relative  w-1/2 h-[75vh]  ">
            <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2  -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
            {"ALLTHINGSGO".split("").map((item,index)=>(
                <span>{item}</span>
            ))}</h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover 'src="https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png"></img>
            </div>
          
            </div>
        </div>
   </div>





   <div className='px-10'>
   <div className="cards w-full flex gap-10 mt-10">
            <div className="cardcontainer relative  w-1/2 h-[75vh]  ">
          <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2  -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
            {"TRAWA".split("").map((item,index)=>(
                <span>{item}</span>
            ))}
          </h1>
            <div className='card w-full h-full rounded-xl  overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"></img>
            </div>
             </div>
            <div className="cardcontainer relative  w-1/2 h-[75vh]  ">
            <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2  -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl font-["FoundersGrotesk"]'>
            {"BLACKBOOK".split("").map((item,index)=>(
                <span>{item}</span>
            ))}</h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover 'src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg"></img>
            </div>
          
            </div>
        </div>
        </div>

    </div>
  )
}

export default Featured