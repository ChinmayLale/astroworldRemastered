import React from 'react'
import aboutBG from '../assets/aboutBG.svg'
import { Element } from 'react-scroll'
import RevelAnim from './RevelAnim'
import resume from '../assets/Chinmay_Lale_Resume.pdf'


function AboutMe() {
    return (
        <Element name="about">
            <div className='relative w-full h-fit  flex flex-col items-center p-4 bg-[#f8f6f6] dark:bg-[#1c1917] dark:text-[#fafaf9]'>
                <h1 className='relative text-[3.5vmax] font-[600] font-poppins'>About Me</h1>
                <h1 className='relative text-[1.5vmax] font-[400] font-poppins'>My Intro</h1>
                <div className='relative w-full h-full flex flex-row  justify-around max-[650px]:flex-col max-[650px]:items-center'>
                    <div className='relative w-[50%] h-[70vh] flex flex-col p-2 max-[650px]:w-full font-poppins max-[650px]:h-[30vh]'> <img src={aboutBG} className='w-[95%] h-[95%] ' alt="" /></div>
                    <div className='relative w-[50%] h-[70vh] flex flex-col justify-around p-2 max-[650px]:w-full font-poppins max-[650px]:h-fit'>
                        <div className='relative w-full h-fit flex flex-row justify-start gap-2 max-[650px]:h-fit p-2 max-[650px]:scale-110 max-[650px]:justify-around'>
                            <div className='relative w-[30%] h-[30vh] flex flex-col bg-gray-100 justify-center items-center  rounded-xl border border-gray-500 max-[650px]:h-[15vh]  dark:bg-[#262626]'>
                                <i className="ri-award-line relative text-[3.5vmax] font-[300] font-poppins"></i>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins'> Experiance </h1>
                                <h1 className='relative text-[1vmax] font-[300] font-poppins text-center'>4+ Months</h1>
                            </div>

                            <div className='relative w-[30%] h-[100%] flex flex-col bg-gray-50 justify-center items-center  rounded-xl border border-gray-500 max-[650px]:h-[15vh] dark:bg-[#262626]'>
                                <i className="ri-stack-line relative text-[3.5vmax] font-[300] font-poppins"></i>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins text-center w-full'>Projects Done</h1>
                                <h1 className='relative text-[1vmax] font-[300] font-poppins text-center'>7+</h1>
                            </div>

                            <div className='relative w-[30%] h-full flex flex-col bg-gray-50 justify-center items-center  rounded-xl border border-gray-500 max-[650px]:h-[15vh] dark:bg-[#262626]'>
                                <i className="ri-braces-line relative text-[3.5vmax]  font-poppins"></i>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins text-center'> Tech Stack Learnt </h1>
                                <h1 className='relative text-[1vmax] font-[300] font-poppins text-center'>4+</h1>
                            </div>
                        </div>
                       <RevelAnim element={
                         <div className='relative w-full h-fit flex flex-col pt-1 items-start max-[650px]:items-center'>
                         <h1 className='relative w-full px-2 font-poppins text-[1.2vmax] max-[650px]:text-pretty max-[650px]:text-[2vmax] max-[650px]:py-4'>I'm Chinmay Lale, a ReactJS & NodeJS Developer from Pune, specializing in MERN Stack, AI, and IoT. I have a B.Tech in Computer Science and experience in full-stack development and cybersecurity. Notable projects include a patented AI crop monitoring system and a self-navigating rover.</h1>
                         <button className='relative flex flex-row items-center justify-center mt-[5%] bg-gray-800 text-gray-200 p-2 rounded-lg text-[1.2vmax] font-semibold font-poppins max-[650px]:text-[2vmax] '><a href={resume} download={true}>Download CV<i className="ml-1 ri-file-download-line "></i> </a></button>
                     </div>
                       }>

                       </RevelAnim>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default AboutMe