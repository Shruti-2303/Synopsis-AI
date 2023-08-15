import React from 'react'
import { logo } from '../assets';
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="sums_logo" className="w-56 object-contain" />

            <button type='button' onClick={()=> window.open('https://github.com/Shruti-2303/Synopsis-AI')} className='black_btn'>GitHub</button>
        </nav>
        <h1 className="head_text">
        <span className='text-5xl'>Effortless Article Digests using </span><br className='max-md:hidden'/>
            <span className='blue_gradient mt-5'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
        Unveil the Future of Efficient Reading with Synopsis AI! Unleash the Power of GPT-4 to Condense Complex Texts into Bite-sized Brilliance. Say Goodbye to Information Overload as You Embrace Seamless Summaries and Embrace a New Era of Clarity!
        </h2>
    </header>
  )
}

export default Hero