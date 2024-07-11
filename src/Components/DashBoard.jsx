import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import rocket from '../assets/mypic_test_1.png';
import RevelAnim from './RevelAnim';
import { Element } from 'react-scroll';
import './myimg.css'


function DashBoard() {
    



    return (
        <Element name="dashboard">
            {/*  bg-[#fafbff] */}
            <div className='relative h-full w-full p-2  flex flex-col bg-[rgb(255,250,250)]' >
                <div className='relative w-full h-[72vh]  flex flex-row max-[650px]:flex-col-reverse'>
                    <div className='relative  flex flex-col h-full w-[50%] max-[650px]:w-full items-start pl-[10%] justify-center gap-4'>
                        <RevelAnim element={<h1 className='relative text-[4vmax] font-[600] font-poppins '>Chinmay Lale 👋🏻</h1>}></RevelAnim>
                        <RevelAnim element={
                            <h1 className='relative text-[2vmax] font-[400] font-poppins'><Typewriter
                            options={{
                                strings: ['--Full Stack Developer', '--Patent Holder', '--Backend Developer', '--DSA Enthusiast', '--Hackathon Winner', '--IOT Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h1>
                        }>
                        </RevelAnim>
                        <RevelAnim element={<h1 className='relative text-[1.6vmax] font-[400] font-poppins w-[90%] max-[650px]:text-[2vmax]'>Crafting innovative solutions with MERN Stack, I, and IoT technologies to drive technological advancements.</h1>}></RevelAnim>

                        <button className='relative flex flex-row items-center justify-center mt-[5%] bg-gray-800 text-gray-100 p-2 rounded-lg text-[1.5vmax] font-semibold font-poppins animate-bounce max-[650px]:text-[2vmax]'><a href="mailto:chinmay29.lale@gmail.com">Say Hello<i class="ml-1 ri-send-plane-fill "></i> </a></button>
                    </div>
                    <div className='relative flex flex-row h-full w-[50%] max-[650px]:w-full items-center justify-center overflow-hidden'>
                        <img src={rocket} alt="Personal Image" className='myimg relative z-10 w-[50%] h-[80%] object-cover rounded-full grayscale max-[650px]:w-[70%] max-[650px]:h-[90%]' />
                    </div>
                </div>

            </div>
        </Element>
    )
}

export default DashBoard