import React from 'react'
import { Element } from 'react-scroll'

function Skills() {
    return (
        <Element name='skills'>
            {/*   bg-[#F8F8FF]*/}
        <div className='relative w-full h-fit  flex flex-col items-center p-4 mt-6 bg-[rgb(255,250,250)]'>
            <h1 className='relative text-[3vmax] max-[650px]:text-[3.5vmax] font-[600] font-poppins'>My Skills</h1>
            <h1 className='relative text-[1.5vmax] font-[400] font-poppins'>Technical Skills</h1>
            <div className='relative w-full h-[80vh] max-[650px]:h-[100vh]  flex flex-row items-center justify-around max-[650px]:flex-col max-[650px]:gap-4 '>
                
                
                <div className='relative w-[25%] h-[50vh] flex flex-col bg-gray-100 justify-around items-center  rounded-xl border border-gray-500 max-[650px]:h-[40vh] max-[650px]:w-[80%]'>
                    <h1 className='relative text-[1.5vmax] font-[500] font-poppins text-center pt-4 max-[650px]:text-[2.5vmax]'>Backend Development</h1>
                    <div className='relative p-[4%]  w-full h-full grid grid-cols-2 grid-rows-3 gap-2 max-[650px]:gap-4'>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                            <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>Node Js</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                        <div className=" p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                        <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>ExpressJs</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Advanced</h1>
                            </div>
                        </div>

                        <div className=" p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                        <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>Python</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                        <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>Java</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0"> 
                            <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>FireBase</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Beginner</h1>
                            </div>
                        </div>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0"> 
                            <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>MongoDB</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='relative w-[25%] h-[50vh] flex flex-col bg-gray-100 justify-around items-center  rounded-xl border border-gray-500 max-[650px]:h-[40vh] max-[650px]:w-[80%]'>
                    <h1 className='relative text-[1.5vmax] font-[500] font-poppins text-center pt-4 max-[650px]:text-[2.5vmax]'>FrontEnd Development</h1>
                    <div className='relative p-[4%]  w-full h-full grid grid-cols-2 grid-rows-3 gap-2 max-[650px]:gap-4'>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                            <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>React Js</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                        <div className=" p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                        <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>CSS</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Advanced</h1>
                            </div>
                        </div>

                        <div className=" p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                        <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>html</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                        <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>tailwind</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0"> 
                            <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>UI libs</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Beginner</h1>
                            </div>
                        </div>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0"> 
                            <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>Figma</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='relative w-[25%] h-[50vh] flex flex-col bg-gray-100 justify-around items-center  rounded-xl border border-gray-500 max-[650px]:h-[40vh] max-[650px]:w-[80%]'>
                    <h1 className='relative text-[1.5vmax] font-[500] font-poppins text-center pt-4 max-[650px]:text-[2.5vmax]'>Miscellaneous</h1>
                    <div className='relative p-[4%]  w-full h-full grid grid-cols-2 grid-rows-3 gap-2 max-[650px]:gap-4'>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                            <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>DSA</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                        <div className=" p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                        <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>Android</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Advanced</h1>
                            </div>
                        </div>

                        <div className=" p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                        <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>iot</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0">
                        <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>JwtAuth</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0"> 
                            <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>C \ C++</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Beginner</h1>
                            </div>
                        </div>

                        <div className="p-4 flex flex-row items-start justify-around gap-2 max-[650px]:p-0"> 
                            <i class="ri-verified-badge-fill text-[1.5vmax] font-[500] max-[650px]:text-[2.2vmax]"></i>
                            <div className='relative w-full h-full flex flex-col'>
                                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:text-[2.2vmax]'>My Sql</h1>
                                <h1 className='max-[650px]:text-[1.8vmax] font-[300]'>Intermediate</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Element>
    )
}

export default Skills