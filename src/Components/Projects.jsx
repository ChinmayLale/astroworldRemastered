import React from 'react'
import { Element } from 'react-scroll'
import ProjectCard from './ProjectCard';
import eduHub from '../assets/eduHub.jpg';
import portfolio from '../assets/portfolio.jpg';
import trata from '../assets/trata.jpg';
import nexachat from '../assets/nexaChat.png';


function Projects() {
    const projects = [
        {
            type: "website",
            imgSrc:nexachat,
            title: "NexaChat",
            desc: "One to One Video Chat Application, built by implementing socket io",
            technologies: ["React Js", "Node.js", "MongoDB" , "Express Js" , "Socket io"]
        },
        {
            type:"website",
            imgSrc:eduHub,
            title: "EduHub",
            desc: "An Online E Learning Platform Which Leverages Features Like Group Studies ",
            technologies: ["React", "Node.js", "MongoDB", "Express Js" , "Socket io"]
        },
        {
            type:"iot & ml",
            imgSrc:trata,
            title: "Trata",
            desc: " A AI Based Crop Monitoring & Prediction System , Integrated With IOT Sensors",
            technologies: ["Machine Learning", "IOT", "FireBase" , "Android"]
        },
        {
            type:"website",
            imgSrc:portfolio,
            title: "AstroWorld",
            desc: "My Personal Portfolio website with Integrated chatbot",
            technologies: ["React", "Socket io", "MongoDb" , "Node JS"]
        },
        

    ];

    return (
        <Element name='Projects'>
            <div className='relative w-full h-fit  flex flex-col items-center p-4 pt-8 bg-[#f8f6f6] overflow-hidden dark:text-[#fafaf9] dark:bg-[#1c1917]'>
                <h1 className='relative text-[3vmax] max-[650px]:text-[3.5vmax] font-[600] font-poppins'>See My Work Here <i className="ri-stack-line font-[200]"></i></h1>
                <h1 className='relative text-[1.5vmax] font-[400] font-poppins'>Projects</h1>
                <div className='relative w-full h-fit max-[650px]:h-fit  flex flex-row items-center justify-start pl-[17%] gap-8 max-[650px]:flex-col max-[650px]:pt-8 flex-wrap max-[650px]:flex-nowrap max-[650px]:pl-0' >
                    {projects.map((project)=>{
                        return <ProjectCard title={project.title} desc={project.desc} tech={project.technologies} type={project.type} imgSrc={project.imgSrc}/>
                    })}
                </div>
            </div>
        </Element>
    )
}

export default Projects