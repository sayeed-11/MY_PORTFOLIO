import React from 'react'

// const BG = "from-[#485563] to-[#29323C]"

const Home = () => {
    return (
        <div className='w-full min-h-screen justify-start items-center flex flex-col  bg-black  text-white relative'>
            {/* <div className='absolute w-full h-full'><div className='absolute w-[50%] h-full left-0 bg-[#0ea6ff]'/><div className='absolute w-[50%] h-full right-0 bg-white'/></div> */}
            <div className='flex flex-col justify-center items-center font-Barlow -translate-y-[3rem] relative'>
                <div className='translate-y-[7rem]'>
                    <h1 className='translate-y-[3rem] text-3xl font-Anton'>👋 Hi my name is <span className='text-[#485563]'>SAYEED ANWAR</span> & I'm a</h1>
                    <h1 className='text-[8rem] font-extrabold font-Saira bg-gradient-to-b from-[#29323C] clip-text'>WEB <span className='font-Barlow'>&</span> APPLICATION</h1>
                </div>
                <h1 className='text-[15rem] font-extrabold uppercase font-Saira  home-text'>Developer</h1>
            </div>
            <div className='-translate-y-[5rem] space-x-20'>
                <a href="#FRONT-END"><button className='bg-gradient-to-b from-[#29323C] to-[#485563] px-7 py-3 font-semibold text-white border-[1px] border-[#ffffff]'>YOU NEED A WEB DEVELOPER</button></a>
                <button className='bg-gradient-to-b from-[#29323C] to-[#485563] px-7 py-3 font-semibold text-white border-[1px] border-[#ffffff]'>YOU NEED AN APP DEVELOPER</button>
            </div>
        </div>
    )
}

export default Home