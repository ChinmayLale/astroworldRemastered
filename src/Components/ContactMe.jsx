import React, { useState } from 'react'

function ContactMe() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });



    return (
        <div className='relative h-full w-full p-2  flex flex-col bg-[#f8f6f6] dark:bg-[#1c1917] dark:text-[#fafaf9] items-center'>
            <div className="mockup-browser bg-base-300 border relative h-[80vh] w-[90%] flex flex-col">
                <div className="mockup-browser-toolbar">
                    <div className="input">https://www.linkedin.com/in/chinmaylale/</div>
                </div>
                <div className='relative w-full h-full bg-red -300 flex flex-row items-center'>
                    <div className='relative w-[50%] h-full bg-re d-500 flex flex-col p-[2%] border-r-gray-500 border'>
                        <h1 className='relative text-[3vmax] max-[650px]:text-[3.5vmax] font-[600] font-poppins'>I'd like to here from you.</h1>

                    </div>
                    <div className='relative w-[50%] h-full bg-yellow-50 p-[5%]'>
                        lacac
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe