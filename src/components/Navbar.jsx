import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 left-0 px-5 py-2 backdrop-blur-3xl flex justify-between items-center z-50'>
        <div>
            <h1 className='font-Anton text-xl text-white'>SAYEED</h1>
        </div>
        <div>
            <ul className='flex font-Barlow gap-x-5 text-sm font-semibold text-white'>
                <li><a href="/#">HOME</a></li>
                <li><a href="/#">ABOUT</a></li>
                <li><a href="/#">SKILL</a></li>
                <li><a href="/#">PROJECT</a></li>
                <li><a href="/#">CONTACT</a></li>
            </ul>
        </div>
        <div>
            <button className='bg-gradient-to-b from-[#29323C] to-[#485563] px-7 py-2 font-semibold text-white border-[1px] border-[#fff] font-Saira'>HIRE ME</button>
        </div>
    </div>
  )
}

export default Navbar