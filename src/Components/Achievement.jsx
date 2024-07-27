import React from 'react'
import { Element } from 'react-scroll'




function Achievement() {

    const myAchi = [
        {
            id: 1,
            title: "Hackethon Winner",
            desc: "Led a team to achieve 2nd place in a CSESA hackathon.",

        },
        {
            id: 2,
            title: "Avishkar Competition",
            desc: "Exhibited ingenuity and troubleshooting abilities by becoming a finalist among 12 teams in the state level Avishkar Competition"
        },
        {
            id: 3,
            title: "Google Cloud Skill Boost",
            desc: "Illustrated proficiency in cloud computing by earning 6 digital badges from Google Cloud Skill Boost ",
        },
        {
            id: 4,
            title: "E Yantra Competition",
            desc: "Advanced to the pre-semifinal stage of the E-Yantra Competition, demonstrating exceptional skills in robotics and embedded systems",
        }
    ]

    return (
        <Element name='workExp'>
            <div className='relative w-full h-fit  flex flex-col items-center p-4 pt-8 bg-[#f8f6f6] dark:bg-[#1c1917] dark:text-[#fafaf9] font-poppins'>
                <h1 className='relative text-[3vmax] max-[650px]:text-[3.5vmax] font-[600] font-poppins'>See My Achievements</h1>
                <h1 className='relative text-[1.5vmax] font-[400] font-poppins max-[650px]:mb-8'>Here's What I Achieved</h1>
                <div className='relative w-full h-[90vh] max-[650px]:h-fit p-[2%] max-[650px]:p-0 flex flex-row items-center justify-center  max-[650px]:flex-col max-[650px]:gap-4 flex-wrap gap-[4%] max-[650px]:flex-nowrap'>
                    {myAchi.map((achi) => {
                        return (
                            <div className='w-[30%] h-[25vh] flex flex-col bg-gray-50 shadow-md rounded-xl justify-center items-center gap-2 max-[650px]:w-[85%]'>
                                <h1 className='relative text-[1.5vmax] max-[650px]:text-[2.5vmax] font-[700] font-poppins text-center'> 🏆 {achi.title}</h1>
                                <h2 className='relative text-[1vmax] max-[650px]:text-[3.5vmax] font-[400] font-poppins w-[80%] text-center max-[650px]:text-base'>{achi.desc}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Element>
    )
}

export default Achievement