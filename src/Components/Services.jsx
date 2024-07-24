import React, { useState } from 'react'
import { Element } from 'react-scroll'
import ServicesDilog from './ServicesDilog'

function Services() {
    const [ toggleDilog , setToggleDilog] = useState({state:false , id:0});




    return (
        <Element name='services'>
            <div className='relative w-full h-fit  flex flex-col items-center p-4 pt-8 bg-[#f8f6f6] overflow-hidden dark:text-[#fafaf9] dark:bg-[#1c1917]'>
                <h1 className='relative text-[3vmax] max-[650px]:text-[3.5vmax] font-[600] font-poppins'>What Can I Do <i className="ri-lightbulb-line font-[200]"></i></h1>
                <h1 className='relative text-[1.5vmax] font-[400] font-poppins'>Services</h1>
                <div className='relative w-full h-[80vh] max-[650px]:h-[100vh]  flex flex-row items-center justify-center gap-8 max-[650px]:flex-col max-[650px]:pt-8 '>

                    <div className='relative w-[20%] h-[50vh] flex flex-col bg-gray-100 justify-end p-[2%] items-start  rounded-xl border border-gray-500 max-[650px]:h-[35vh] max-[650px]:w-[60%] max-[650px]:pb-8  dark:bg-[#221f1d]'>
                        <h1 className='font-[200]'><i className="ri-reactjs-fill text-[3.5vmax] font-[200]"></i></h1>
                        <h1 className='relative text-[2vmax] max-[650px]:text-[2.5vmax] font-[500] font-poppins'>Website Developement </h1>
                        <h1 className='relative text-[1.5vmax] font-[300] font-poppins hover:scale-105 duration-200 ease-in-out cursor-pointer max-[650px]:text-[2vmax] pt-2 animate-pulse' onClick={()=>{setToggleDilog({state:!toggleDilog.state , id:0})}}>View More <i className="ri-arrow-right-line"></i> </h1>
                    </div>

                    <div className='relative w-[20%] h-[50vh] flex flex-col bg-gray-100 justify-end p-[2%] items-start  rounded-xl border border-gray-500 max-[650px]:h-[35vh] max-[650px]:w-[60%] max-[650px]:pb-8  dark:bg-[#221f1d]'>
                        <h1 className='font-[200]'><i className="ri-nodejs-fill text-[3.5vmax] font-[200]"></i></h1>
                        <h1 className='relative text-[2vmax] max-[650px]:text-[2.5vmax] font-[500] font-poppins'>Backend Developement </h1>
                        <h1 className='relative text-[1.5vmax] font-[300] font-poppins hover:scale-105 duration-200 ease-in-out cursor-pointer max-[650px]:text-[2vmax] pt-2 animate-pulse' onClick={()=>{setToggleDilog({state:!toggleDilog.state , id:1})}}>View More <i className="ri-arrow-right-line"></i> </h1>
                    </div>

                    <div className='relative w-[20%] h-[50vh] flex flex-col bg-gray-100 justify-end p-[2%] items-start  rounded-xl border border-gray-500 max-[650px]:h-[35vh] max-[650px]:w-[60%] max-[650px]:pb-8  dark:bg-[#221f1d]'>
                        <h1 className='font-[200]'><i className="ri-braces-line text-[3.5vmax] font-[200]"></i></h1>
                        <h1 className='relative text-[2vmax] max-[650px]:text-[2.5vmax] font-[500] font-poppins'>Python Developement </h1>
                        <h1 className='relative text-[1.5vmax] font-[300] font-poppins hover:scale-105 duration-200 ease-in-out cursor-pointer max-[650px]:text-[2vmax] pt-2 animate-pulse' onClick={()=>{setToggleDilog({state:!toggleDilog.state , id:2})}}>View More <i className="ri-arrow-right-line"></i> </h1>
                    </div>
                </div>

                <ServicesDilog visible={toggleDilog.state} toggle={()=>setToggleDilog({id:toggleDilog.id, state:!toggleDilog.state})} id={toggleDilog.id}/>
            </div>
        </Element>
    )
}

export default Services