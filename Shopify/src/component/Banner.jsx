import React from 'react'
import BannerImg from '../assets/images/hero.webp'

export default function Banner(){
    return(
        <div className='flex gap:10 items-center bg-[#e3edf6] dark:bg-slate-600 font-lora p-6'>
            <div className='flex-1'>
                <p className='text-black dark:text-white font-bold'>Starting At 999 dt</p>
                <h1 className='text-black font-bold text-4xl md:text-5xl dark:text-white py-6'>The best notebook <br/> collection 2025</h1>
                <h4 className='text-2xl dark:text-white font-medium mb-3'>Exclusive offer <span className='text-red-500'>-50%</span> off this week</h4>
                <button className='bg-white hover:bg-blue-500 hover:text-white font-bold text-large rounded-lg p-2'>Grab the opportunity Now</button>
            </div>
            <div className='flex-1'>
                <img src={BannerImg} alt="Banner img" />
            </div>
        </div>
    )
}


