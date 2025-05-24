import React from 'react'

function Cards() {
  return ( 
    <div className='w-full h-screen flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo 1"></img>
                <button className='absolute px-2 py-1 rounded-full border-2 left-8 bottom-8'>&copy; 2024-2025</button>
            </div> 
        </div>  
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Logo 2"></img>
                <button className='absolute px-1 py-1 rounded-full border-2 left-4 bottom-4'>&copy;Clutch</button>
            </div> 
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Logo 3"></img>
                <button className='absolute px-1 py-1 rounded-full border-2 left-4 bottom-4'>&copy; Absolute</button>
            </div> 
        </div>
    </div>
  )
} 

export default Cards