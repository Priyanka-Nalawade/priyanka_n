import React from 'react'
import BannerImg from '../assets/images/hero.webp'

export default function Banner(){
    return(
        <div className='flex gap:10 items-center bg-[#e3edf6] dark:bg-slate-600 font-lora p-6'>
            <div className='flex-1'>
                <p>Starting At 999dt</p>
                <h1 className='text-black font-bold text-4xl md:text-5xl dark:text-white'>The best notebook <br/> collection 2025</h1>
                <h4>Exclusive offer -50% off this week</h4>
                <button className='bg-white hover:bg-blue-500 hover:text-white font-bold text-large rounded-lg p-2'>Grab the opportunity Now</button>
            </div>
            <div className='flex-1'>
                <img src={BannerImg} alt="Banner img" />
            </div>
        </div>
    )
}


