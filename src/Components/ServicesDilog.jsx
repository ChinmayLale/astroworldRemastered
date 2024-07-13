import React, { useState, useEffect } from 'react'

function ServicesDilog({ visible, toggle, id }) {

    const [isAnimating, setIsAnimating] = useState(false);
    const data = [
        {
            title: 'Web Devlopement',
            Desc: 'MERN stack developer with more than 4 months of experience . Providing quality work in projects & companies.',
            bullet: ['I develop full-stack applications.', 'I design and implement React components.', 'I create responsive and interactive web applications.', 'I use UI libs for smart easy design.']
        },
        {
            title: 'backend Devlopement',
            Desc: 'MERN stack developer with more than 4 months of experience . Providing quality work in projects & companies.',
            bullet: ['I develop full-stack applications.', 'I design and implement React components.', 'I create responsive and interactive web applications.', 'I use UI libs for smart easy design.']
        },
        {
            title: 'Python Devlopement',
            Desc: 'MERN stack developer with more than 4 months of experience . Providing quality work in projects & companies.',
            bullet: ['I develop full-stack applications.', 'I design and implement React components.', 'I create responsive and interactive web applications.', 'I use UI libs for smart easy design.']
        }
    ]
    useEffect(() => {
        if (visible) {
            setIsAnimating(true);
        } else {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 500); // This should match the transition duration
            return () => clearTimeout(timer);
        }
    }, [visible]);

    const handleClose = () => {
        toggle();
    };


    return (
        <>
            <div id="small-modal" tabIndex="-1" className={`fixed top-[8%]  backdrop-blur-md left-0 right-0  z-50 ${isAnimating ? 'block' : 'hidden duration-500'} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full h-full flex flex-row items-center justify-center`}>

                <div className={`relative w-full max-w-md max-h-full  ${visible ? 'translate-x-0' : '-translate-x-[200%]'} duration-500 ease-in-out h-[100%] flex flex-row items-center justify-center`}>

                    <div className="relative rounded-lg shadow max-[650px]:h-[60%] h-[60%]  dark:bg-[#221f1d]">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 ">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center w-full">
                                <i className='ri-reactjs-fill text-2xl'></i> {data[id].title || 'Web Devlopement'}
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal" onClick={handleClose}>
                                <svg className="w-3 h-3" aria-hidden={visible} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 w-full text-center mb-[10%]">
                                {data[id].Desc}
                            </p>
                            <ul className=' space-y-[5%]'>
                                {data[id].bullet.map((obj) => {
                                    return (
                                        <li>
                                            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                                <i class="ri-checkbox-circle-line"></i>{obj}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="small-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button data-modal-hide="small-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                    </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServicesDilog