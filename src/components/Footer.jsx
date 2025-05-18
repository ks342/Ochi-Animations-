

import React from 'react';

function Footer() {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-900 p-20 text-white">
      {/* Left side */}
      <div className='w-1/2 h-full flex flex-col justify-between text-[10vw] font-semibold uppercase leading-none -mb-10 font-["FoundersGrotesk"]'>
        <div className="heading">
          <h1>Eye-</h1>
          <h1>Opening</h1>
        </div>
        <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG paths remain unchanged */}
        </svg>
      </div>

      {/* Right side */}
      <div className="w-1/2 h-full flex flex-col justify-between font-['FoundersGrotesk']">
        <div>
          <h1 className="text-[10vw] font-semibold uppercase leading-none -mb-10">Presentations</h1>
        </div>

        <div className="dets  text-xl font-light font-['NeueMontreal']">
            <h2 className=' font-semibold text-3xl mb-3'> Socials:</h2>
          <a className="block mb-2" href="#">Facebook</a>
          <a className="block mb-2" href="#">Instagram</a>
          <a className="block mb-2" href="#">Twitter</a>
          <a className="block" href="#">Snap</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
