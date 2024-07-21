import React from 'react'
import cyber from '../assets/Cyber.jpg';



function ProjectCard(props) {

    
    return (
        <div className='relative w-[25%] h-[70vh] flex flex-col  justify-start p-[1%] items-start max-[650px]:h-[50vh] max-[650px]:w-[70%] max-[650px]:pb-8  dark:bg-[#221f1d] text-slate-800 font-poppins hover:bg-white transition-colors duration-200  max-[650px]:m-[5%] group overflow-hidden'>
            <i class="ri-arrow-right-up-line bg-black text-slate-50 text-2xl p-[3%] absolute top-[45%] right-[7%] cursor-pointer z-50 max-[650px]:top-[32%] group-hover:animate-bounce"></i>
            <img src={cyber} alt="Cyber" className='relative w-full h-[50%] group-hover:scale-105 transition-all duration-200 z-[0]' />
            <h1 className='font-[500] flex flex-row items-center text-lg gap-2 px-2 text-gray-500'><i className="ri-git-commit-line text-[1.5vmax] font-[200]"></i> {props.type}</h1>
            <h1 className='relative text-[1.5vmax] max-[650px]:text-[2.5vmax] font-[700] font-poppins px-4'>{props.title}</h1>
            <h1 className='relative text-[1vmax] font-[300] font-poppins hover:scale-105 duration-200 px-4 ease-in-out cursor-pointer max-[650px]:text-[2vmax] pt-2 animate-pulse text-slate-950 '>{props.desc}  <i className="ri-arrow-right-line"></i> </h1>
            <div className='w-full h-fit flex flex-row items-center justify-start gap-4 m-[2%] flex-wrap px-2 '>
                {/* <span className='bg-gray-800 p-[2%] rounded-2xl text-xs text-slate-50'> React js</span> */}
                {props.tech.map((tech)=>{
                    return <span className='bg-gray-800 p-[2%] rounded-2xl text-xs text-slate-50'>{tech}</span>
                })}
            </div>
        </div>
    )
}

export default ProjectCard