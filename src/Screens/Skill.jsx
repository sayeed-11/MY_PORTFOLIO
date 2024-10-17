import React from 'react'

const Skill = () => {
    return (
        <div className='min-h-screen w-full bg-black p-5 flex flex-col items-center pt-20'>
            <h1 className='text-[10rem] text-white font-Anton bg-gradient-to-b from-[#29323C] to-transparent clip-text'>SKILL</h1>
            <div className='space-y-20'>
                <FrontEnd />
                <BackEnd />
                <App />
            </div>
        </div>
    )
}

export default Skill


const FrontEnd = () => {
    return (
        <div id='FRONT-END' className='fontEnd text-white space-y-10'>
            <h1 className='text-white font-Anton text-5xl'>FRON-END</h1>
            <div className='grid grid-cols-3 *:bg-gradient-to-r *:from-[#29323C] *:via-[#29323C] *:to-transparent  gap-10 *:p-5'>
                <div className=' flex justify-between'>
                    <div className='space-y-5'>
                        <h1 className='font-Barlow font-bold text-3xl text-black'>HTML/CSS</h1>
                        <p className='text-[#FFF] font-Barlow w-[50%]'>Crafting modern and accessible websites with attention to detail.</p>
                    </div>
                    <i className="fa-brands fa-html5 text-7xl text-[#29323C]" />
                </div>
                <div className=' flex justify-between'>
                    <div className='space-y-5'>
                        <h1 className='font-Barlow font-bold text-3xl text-black'>REACT.JS</h1>
                        <p className='text-[#FFF] font-Barlow w-[50%]'>Building dynamic, responsive, and user-friendly interfaces.</p>
                    </div>
                    <i className="fa-brands fa-react text-7xl text-[#29323C]" />
                </div>
                <div className=' flex justify-between'>
                    <div className='space-y-5'>
                        <h1 className='font-Barlow font-bold text-3xl text-black'>JavaScript (ES6+)</h1>
                        <p className='text-[#FFF] font-Barlow w-[50%]'>Implementing interactive features and efficient functionality.</p>
                    </div>
                    <i className="fa-brands fa-js text-7xl text-[#29323C]" />
                </div>
                <div className=' flex justify-between'>
                    <div className='space-y-5'>
                        <h1 className='font-Barlow font-bold text-3xl text-black'>Tailwind CSS</h1>
                        <p className='text-[#FFF] font-Barlow w-[50%]'>Designing clean and scalable layouts with utility-first styling.</p>
                    </div>
                    <div>
                        <svg
                            fill="#29323C"
                            width="4.5rem"
                            height="4.5rem"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                            />
                        </svg>
                    </div>
                </div>
                <div className=' flex justify-between'>
                    <div className='space-y-5'>
                        <h1 className='font-Barlow font-bold text-3xl text-black'>TypeScript</h1>
                        <p className='text-[#FFF] font-Barlow w-[50%]'>Ensuring code reliability and scalability in larger applications.</p>
                    </div>
                    <div>
                        <svg
                            fill='#29323C'
                            width="4.5rem"
                            height="4.5rem"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>language_typescript</title>
                            <rect width="24" height="24" fill="none" />
                            <path d="M3,3H21V21H3V3M13.71,17.86a3.26,3.26,0,0,0,3.09,1.73c1.6,0,2.8-.83,2.8-2.36s-.81-2-2.25-2.66l-.42-.18c-.73-.31-1-.52-1-1a.74.74,0,0,1,.81-.73,1.16,1.16,0,0,1,1.09.73l1.31-.87a2.5,2.5,0,0,0-2.4-1.33,2.26,2.26,0,0,0-2.48,2.23c0,1.38.81,2,2,2.55l.42.18c.78.34,1.24.55,1.24,1.13s-.45.83-1.15.83a1.83,1.83,0,0,1-1.67-1l-1.38.8M13,11.25H8v1.5H9.5V20h1.75V12.75H13Z" />
                        </svg>
                    </div>
                </div>
                <div className=' flex justify-between'>
                    <div className='space-y-5'>
                        <h1 className='font-Barlow font-bold text-3xl text-black'>Next.js</h1>
                        <p className='text-[#FFF] font-Barlow w-[50%]'>Server-side rendering and static site generation for optimized web apps.</p>
                    </div>
                    <div className='scale-[2] -translate-x-10 translate-y-10'>
                        <svg
                            width="3.5rem"
                            height="4.5rem"
                            viewBox="0 -101.5 512 512"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            preserveAspectRatio="xMidYMid"
                        >
                            <g>
                                <path
                                    d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z"
                                    fill="#29323C"
                                    fillRule="nonzero"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}


const BackEnd = () => {
    return (
        <div className='fontEnd text-white space-y-10'>
            <h1 className='text-white font-Anton text-5xl'>BACK-END</h1>
            <div className='grid grid-cols-4 *:bg-gradient-to-l *:from-[#29323C] *:via-[#29323C] *:to-transparent  gap-10 *:p-5'>
                <div className='space-y-5 flex flex-col items-end'>
                    <h1 className='font-Barlow font-bold text-3xl text-black'>Node.js</h1>
                    <p className='text-[#FFF] font-Barlow w-[70%] text-right'>Developing robust backend services with scalable APIs.</p>
                </div>
                <div className='space-y-5 flex flex-col items-end'>
                    <h1 className='font-Barlow font-bold text-3xl text-black'>Express.js</h1>
                    <p className='text-[#FFF] font-Barlow w-[70%] text-right'>Building fast and secure server-side applications.</p>
                </div>
                <div className='space-y-5 flex flex-col items-end'>
                    <h1 className='font-Barlow font-bold text-3xl text-black'>MongoDB</h1>
                    <p className='text-[#FFF] font-Barlow w-[70%] text-right'>Designing and managing NoSQL databases for modern applications.</p>
                </div>
                <div className='space-y-5 flex flex-col items-end'>
                    <h1 className='font-Barlow font-bold text-3xl text-black'>RESTful APIs</h1>
                    <p className='text-[#FFF] font-Barlow w-[70%] text-right'>Integrating data from backend services into frontend applications.</p>
                </div>
            </div>
        </div>
    )
}


const App = () => {
    return (
        <div className='space-y-10'>
            <div>
                <h1 className='text-black text-[2.5rem] font-Anton bg-white inline-block px-5 py-2'>APP DEVELOPEMENT</h1>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    [1, 2, 3, 4].map((item) => {
                        return (
                            <div className=' bg-gradient-to-b from-[#29323C] via-[#29323C] to-transparent items-center flex  flex-col gap-y-5 p-5'>
                                <i className="fa-brands fa-react text-7xl" />
                                <h1 className='text-black font-Barlow font-bold text-3xl'>React Native</h1>
                                <p className='text-white text-center font-Barlow'>Building cross-platform mobile apps for iOS and Android with a focus on performance and seamless UX.</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


