import React from 'react';
import modelImg from '../Assets/Component 1.svg'
import btn from '../Assets/Component 2.png'
import ecl from '../Assets/Ellipse 4.png'


const Hero = () => {
  return (
    <div className=' bg-[#F5F7FB] grid lg:flex mx-[15px] sm:mx-[40px] lg:mx-[163px] text-[#000037] '>
        <div className=' delay-200  pt-[110px] pb-[30px] lg:w-[55%]'>
            <h1 className=' text-[35px] md:text-[40px] font-bold mb-[40px]'>Lorem ipsum dolor sit amet.</h1>
            <p className='mb-[30px]'>Lorem ipsum dolor sit amet consectetur je vuex homme ipselon adipisicing elit. Perferendis, accusantium?</p>
            <p className='mb-[30px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, adipisci?</p>
            <div className='w-full flex justify-between gap-2 md:gap-5'>
                <button className='sm:w-[60%] shadow-2xl shadow-[#5687FF] w-[50%] rounded-lg bg-[#5687FF] font-bold text-white py-3'>Get Proposal</button>
                <button className='sm:w-[40%] w-[50%] rounded-lg border font-bold border-[#5687FF] text-[#5687FF] py-3'>Learn More</button>
            </div>
        </div>
        <div className=' bg-[#F5F7FB] z-10 hidden lg:block h-full mx-auto my-auto'>
          <img className='relative top-0 right-0 lg:ml-[100px]' src={modelImg} alt="" />
          <div className='bg-white z-10  ml-9 text-[#000037] w-[250px] absolute top-0 mt-[280px] rounded-xl shadow-2xl px-3 py-5'>
            <p className='text-[#000037] font-bold'>Your Weekly Reports</p>
            <p>Hey Micheal,</p>
            <p>Happy Monday! Let's Dive in 🙂</p>
          </div>
          <button><img className=' absolute drop-shadow-lg shadow-[#5687FF] z-10 top-0 ml-[130px] mt-[390px] colo w-[70px]' src={btn} alt="" /></button>
          <img src={ecl} className='w-[100px] z-0 absolute top-0 mt-[375px] ml-[115px]' alt="" />
        </div>
    </div>
  )
}

export default Hero