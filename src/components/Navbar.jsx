import React from 'react'

const Navbar = () => {
  
  return (
    <div className='w-full py-1 bg-[#f5f7fbaf] backdrop-blur-xl sticky z-30 top-0 right-0 left-0 md:flex justify-around items-center'>
        <div className='mx-4 md:mx-0'>
            <h1 className=' text-[#464E73] cursor-pointer text-2xl my-6 font-bold'>LOREM</h1>
        </div>

        <div>
            <ul className='hidden md:flex w-full justify-around'>
                <li className='text-[#3D4453] cursor-pointer hover:text-[#dbb264] mx-4 my-6 px-1 font-bold'>WHAT WE DO</li>
                <li className='text-[#3D4453] cursor-pointer hover:text-[#dbb264] mx-4 my-6 px-1 font-bold'>RESULT</li>
                <li className='text-[#3D4453] cursor-pointer hover:text-[#dbb264] mx-4 my-6 px-1 font-bold'>LEARN</li>
                <li className='text-[#3D4453] cursor-pointer hover:text-[#dbb264] mx-4 my-6 px-1 font-bold'>CONNECT</li>
                <li className='text-[#9DB5F2] cursor-pointer hover:text-[#dbb264] mx-4 my-6 px-1 font-bold'>FREE PROPOSAL</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;