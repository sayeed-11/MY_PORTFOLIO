import React from 'react'

const About = () => {
    return (
        <div className='min-h-screen w-full bg-black grid grid-cols-2 p-5'>
            <div className='p-5'>
                <h1 className='text-[10rem] text-white font-Anton bg-gradient-to-b from-[#29323C] clip-text'>ABOUT</h1>
                <div className='space-y-5 font-semibold'>
                    <p className='text-[#485563] font-Barlow text-xl '>Hi, I'm <span className='text-white'>SAYEED ANAWR</span>, a passionate website and application developer specializing in creating dynamic, user-friendly, and high-performance web and mobile solutions. With a strong foundation in the MERN stack, React Native, and various modern technologies, I have experience building both websites and mobile apps that are not only functional but also visually engaging.</p>
                    <p className='text-[#485563] font-Barlow text-xl'>Over the years, I have developed various projects, including a Nike clone web app and an IoT-based health monitoring system. I am constantly seeking to learn and experiment with new technologies, making sure I stay ahead of industry trends.</p>
                </div>
            </div>
            <div className='p-5 flex items-center flex-col justify-around'>
                <h1 className='text-white font-Anton text-[5rem]'>WHAT I DO</h1>
                <div className='w-full space-y-20'>
                    <div className='w-full bg-gradient-to-b from-[#29323C] p-3 flex flex-col items-center space-y-5'>
                        <h1 className='text-white font-Anton text-5xl'>WEB DEVELOPMENT</h1>
                        <p className='text-[#FFF] font-Barlow text-center'>Skilled in creating responsive and interactive web applications using technologies like React.js, Tailwind CSS, and the MERN stack.</p>
                    </div>
                    <div className='w-full bg-gradient-to-t from-[#29323C] p-3 flex flex-col items-center space-y-5'>
                        <h1 className='text-white font-Anton text-5xl'>APP DEVELOPMENT</h1>
                        <p className='text-[#FFF] font-Barlow text-center'>Expertise in React Native and Expo, building cross-platform apps with seamless user experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About