import React from 'react'
import { Element } from 'react-scroll'



function WorkExperience() {
    return (
        <Element name='workExp'>
            <div className='relative w-full h-fit  flex flex-col items-center p-4 pt-8 bg-[#f8f6f6] dark:bg-[#1c1917] dark:text-[#fafaf9] font-poppins'>
                <h1 className='relative text-[3vmax] max-[650px]:text-[3.5vmax] font-[600] font-poppins'>Work Experience</h1>
                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:mb-8'>see where i worked</h1>

                <div className='relative w-full h-[90vh] max-[650px]:h-[80vh]  flex flex-row items-center justify-start  max-[650px]:flex-col max-[650px]:gap-4'>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical  h-fit relative max-[650px]:gap-4">
                    <li>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end mb-10 md:text-start">
                                <time className="font-mono italic text-sm">August 2024 - Current</time>
                                <div className="text-lg font-bold">SOCON</div>
                                <p>Software Engineer Intern</p>
                                <p>Working on Handling Apps in Technology like React JS and React Native ,  Responsible for developing AWS lambda python scripts </p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic text-sm">April 2024 - August 2024</time>
                                <div className="text-lg font-bold">Aarya Global Consulting</div>
                                <p>React Js & Node Js Developer</p>
                                <p>React.js & Nodejs Application Developer ,Responsible for Rest API configurations  , Handling Backend  , Developing React Component</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono italic text-sm">January 2024 - April 2024</time>
                                <div className="text-lg font-bold">Profound Edutech</div>
                                <p>Mern Stack Developer Intern</p>
                                <p>Mern Stack Developer Intern , Worked on a full stack Project Called EduHub </p>
                                <p>Tech Learnt : MERN & Mean Stack </p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-auto md:text-end">
                                <time className="font-mono italic text-sm">March 2022 - May 2022</time>
                                <div className="text-lg font-bold">1 Stop AI</div>
                                <p>Cyber Security Intern</p>
                                <p>Worked On 3 Projects </p>
                                <p>1. John the ripper Password attack</p>
                                <p>2. Sql Injection Attacks</p>
                                <p>3. Vulnerability Check</p>
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>
        </Element>
    )
}

export default WorkExperience