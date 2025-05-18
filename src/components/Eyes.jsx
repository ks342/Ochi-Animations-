import React, { useState, useEffect } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);

      // Calculate pupil movement (limited to 10% of the container size)
      const maxMove = 10; // percentage
      const moveX = (deltaX / (window.innerWidth / 2)) * maxMove;
      const moveY = (deltaY / (window.innerHeight / 2)) * maxMove;
      
      setPupilPosition({
        x: Math.min(Math.max(moveX, -maxMove), maxMove),
        y: Math.min(Math.max(moveY, -maxMove), maxMove)
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='relative eyes w-full h-screen overflow-hidden'> 
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'></div>
      <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
          <div 
            style={{
              transform: `translate(${pupilPosition.x}%, ${pupilPosition.y}%)`
            }}
            className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 transition-transform duration-200'
          >
            <div 
              style={{
                transform: `rotate(${rotate}deg)`,
                transformOrigin: 'center'
              }} 
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'
            >
              <div className='absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-100'></div>
            </div>
          </div>
        </div>
        <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
          <div 
            style={{
              transform: `translate(${pupilPosition.x}%, ${pupilPosition.y}%)`
            }}
            className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 transition-transform duration-200'
          >
            <div 
              style={{
                transform: `rotate(${rotate}deg)`,
                transformOrigin: 'center'
              }} 
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'
            >
              <div className='absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-100'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes