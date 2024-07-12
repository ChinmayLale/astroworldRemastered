import React, { useState, useEffect } from 'react'
// import { FlipWords } from './flip-words'
// import './blobs.css'
import Ayusha from '../assets/pic-5.jpg'
import Mern from '../assets/Mern.jpg'
import Cyber from '../assets/Cyber.jpg'
import ESD from '../assets/ESD.jpg'
import coding from '../assets/coding-2.jpg'

function HomePage() {

    const words = ['Web Developer', 'UI/UX Designer', 'Frontend Developer', 'MERN Developer']

    const [circle1Position, setCircle1Position] = useState({ x: 100, y: 400 });
    const [circle2Position, setCircle2Position] = useState({ x: 150, y: 300 });

    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         setCircle1Position({ x: e.clientX, y: e.clientY });
    //     };

    //     window.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const randomX = Math.random() * 10;
    //         const randomY = Math.random() * 10;
    //         setCircle2Position({ x: randomX, y: randomY });
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, []);




    return (

        // Main div


        <div className='relative w-[100vw] h-fit overflow-x-hidden max-[650px]:flex max-[650px]:flex-col max-[650px]:flex-wrap'>


            {/* background circle div */}


            <div
                className="absolute top-[-30%] left-[50%] h-full w-full bg-gradient-to-r from-[#f179ad] to-[#c667f6] blur-lg -z-10"
                style={{
                    clipPath: `circle(${circle1Position.x}px at ${circle1Position.x}px ${circle1Position.y}px)`,
                    animation: 'move 10s linear infinite',
                    transform: 'scale(0.5)'
                }}
            />
            <div
                className="absolute top-[30%] left-[15%] h-full w-full bg-gradient-to-r from-[#f179ad] to-[#c667f6] blur-lg -z-10 "
                style={{
                    clipPath: `circle(${circle2Position.x}px at ${circle2Position.x}px ${circle2Position.y}px)`,
                    animation: 'move 5s linear infinite',
                }}
            />


            {/* hello first front div */}

            < div className='relative flex-wrap w-[100vw] h-[100vh] bg-gradient-to-r from-[#f2eaf8]/70 to-[#fef5f8]/70 backdrop-blur-lg flex flex-row items-center max-[650px]:flex-col-reverse max-[650px]:flex-nowrap max-[650px]:h-[110vh]  max-[650px]:bg-black '>


                {/* Left text div */}

                <div className='relative w-[50%] h-full  bg-red-400 flex flex-col items-start justify-center pl-36 gap-4   max-[650px]:w-[100%] max-[650px]:pl-2 max-[650px]:h-[100%]  max-[650px]:bg-red-400'>
                    <h3 className='relative w-fit font-medium text-blue-950 text-2xl cursor-pointer  '> <i className='ri-separator text-3xl'></i> Hello</h3>
                    <h1 className='relative w-fit font-medium text-blue-950 text-6xl cursor-pointer '>I'm <span className='text-[#fb7da5]'>Ayusha</span> Homkar</h1>
                    <h1 className='relative font-medium text-5xl cursor-pointer '> {/*<FlipWords className='text-[#48b1f1] w-fit p-0' words={words} duration={1600} />*/} FrontEnd Developer </h1>
                    <h3 className='relative w-fit font-medium text-blue-950 pt-2 pb-2 text-lg cursor-pointer  '>
                        A <span className='font-bold'>Computer Science</span>  graduate, has played key roles in innovative projects like a patented crop prediction system and the Edu-Hub platform. With a focus on front-end development and UI/UX design. My skills fuels my drive to create impactful and user-friendly digital solutions.
                    </h3>

                    <button className="relative w-[25%] h-[6%] flex flex-row items-center justify-center mt-4    bg-red-300 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                        Hire Me!
                    </button>


                </div>




                {/* Right img div */}



                <div className='relative w-[50%] h-full bg-green-400 flex flex-col items-start justify-center pl-32 pt-6  max-[650px]:w-[100%] max-[650px]:p-0 max-[650px]:items-center max-[650px]:justify-center max-[650px]:h-[100%] max-[650px]:bg-red-600  '>
                    <img src={Ayusha} alt="My profile photo" className='w-[80%] h-fit opacity-90 max-[650px]:w-[100%] max-[650px]:h-[100%] ' />

                </div>




                {/* Work Experience div */}

                <div className='relative w-[100%] h-fit  flex flex-col items-start justify-start px-36 pb-24 gap-4 pt-16  max-[650px]:m-0 max-[650px]:p-0 max-[650px]:items-center  max-[650px]:justify-center max-[650px]:h-[100vh] bg-red-600 ' >

                    <h1 className='relative w-[100%] font-medium text-center text-[rgb(30,27,75)] text-5xl cursor-pointer '>Work Experience
                    </h1>


                    {/* All 3 cards main div */}

                    <div className='relative w-[100%] h-fit  flex flex-row items-start justify-evenly px-36  max-[650px]:p-0'>

                        {/* Card divs individul */}

                        <div
                            className="transform transition duration-300 hover:scale-125 rounded-lg shadow-lg h-72 w-56 mt-8 scale-110 hover:shadow-xl bg-white"
                        >
                            <div>
                                <img src={Mern} alt="MERN stack" className=' w-[100%] h-[100%] p-2 ' />
                            </div>

                            <div className="px-5 pt-2 flex flex-col">
                                <h2 className="font-semibold">MERN Stack Developer Intern</h2>
                                <h2 className='text-xs'>(Feb 2024 - April 2024)</h2>
                                <h2 className='text-sm'>Worked on a full stack project EduHub using MERN stack</h2>


                            </div>
                        </div>



                        <div
                            className="transform transition duration-300 hover:scale-125 rounded-lg shadow-lg h-72 w-56 mt-8 scale-110 hover:shadow-xl bg-white"
                        >
                            <div>
                                <img src={Cyber} alt="Cyber Security" className=' w-[100%] h-[100%] p-2 pb-0 ' />
                            </div>

                            <div className="px-5 pt-2 flex flex-col">
                                <h2 className="font-semibold">Cyber Security Internship</h2>
                                <h2 className='text-xs'>(March 2022 - May 2022)</h2>
                                <h2 className='text-sm'>Worked on Cyber Security projects like Password cracking, SQL injection, vulnerability checking</h2>


                            </div>
                        </div>



                        <div
                            className="transform transition duration-300 hover:scale-125 rounded-lg shadow-lg h-72 w-56 mt-8 scale-110 hover:shadow-xl bg-white"
                        >
                            <div>
                                <img src={ESD} alt="ESD" className=' w-[100%] h-[100%] p-2 ' />
                            </div>

                            <div className="px-5 pt-2 flex flex-col">
                                <h2 className="font-semibold">Employability Skills Development</h2>
                                <h2 className='text-xs'>(2021)</h2>
                                <h2 className='text-sm'>Attended Employability Skills Development internship arranged in collage</h2>


                            </div>
                        </div>



                    </div>


                </div>





                {/* About me div */}


                < div className='relative flex-wrap w-[100vw] h-[70vh] bg-gradient-to-b from-white via-purple-100 to-purple-100  flex backdrop-blur-lg flex-row items-center '>

                    {/* bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200          from-rose-50  */}

                    {/* Left div about pic*/}

                    <div className='relative w-[50%] h-full  flex flex-col items-start pt-32 pl-20 pr-20 gap-4 max-[650px]:p-0'>
                        {/* img to be upload */}
                        <img src={coding} alt="img" />
                    </div>


                    {/* right div about info*/}

                    <div className='relative w-[50%] h-full  flex flex-col items-start  gap-4   '>

                        <h3 className='relative w-[100%] font-medium text-[rgb(30,27,75)] text-5xl cursor-pointer pt-32 pl-2'>About Me</h3>

                        <h3 className='relative w-[70%] h-fit  flex flex-col items-start pt-6 gap-4  text-xl  '>
                            Creative & Innovative Front-End Developer
                        </h3>

                        <h3 className='relative w-[70%] h-fit  flex flex-col items-start pt-4 gap-4  text-base  '>
                            Passionate Computer Science graduate with expertise in HTML, CSS, JavaScript, React, and MongoDB. I specialize in crafting seamless user experiences and have contributed to cutting-edge projects like a patented crop prediction system using machine learning and the EduHub online education platform.I thrive on turning complex problems into elegant solutions and am always eager to embrace new challenges.
                        </h3>
                        {/* right buttons about div */}
                        <div className='relative h-fit  flex flex-row items-start  gap-12 pt-7 '>
                            {/* //[#f92a68] */}
                            <button className="bg-[#f9634f] text-[#ffe9f0] border border-[#fac8d7] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                <span className="bg-[#f9abc3] shadow-[#fba8c1] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Contact me
                            </button>


                            <button className="bg-violet-950 text-violet-200 border border-violet-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Download CV
                            </button>
                        </div>


                    </div>



                </div>


                {/* My projects div */}

                <div className='relative flex-wrap w-[100vw] h-[100vh] bg-purple-100   flex backdrop-blur-lg flex-col items-center pt-[7%]'>

                    <h1 className='relative w-[100%] font-medium text-center text-[rgb(30,27,75)] text-5xl cursor-pointer '>My Projects</h1>

                    <div className='relative flex-wrap flex-row w-[100vw] h-[100vh] bg-purple-100   flex backdrop-blur-lg  items-center'>

                        {/* Project cards */}

                        <div className="m-12 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
                            <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
                                <svg width="24" height="24" fill="#FFFFFF">
                                    <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
                                </svg>
                            </figure>
                            <h4 className="py-2 text-white font-bold">Jesus Echeverria</h4>
                            <p className="text-base leading-7 text-white font-semibold space-y-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <p className="text-sm leading-7 text-slate-300 space-y-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro est numquam ipsa consequatur provident fugiat quaerat cupiditate temporibus cum?</p>
                            <div className="pt-5 pb-2 flex justify-center">
                                <button className="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">Button</button>
                            </div>
                        </div>


                    </div>

                </div>














            </div>
        </div >

    )
}

export default HomePage