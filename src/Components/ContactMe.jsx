import React, { useState } from 'react';
import AlertGood from './AlertGood';
import axios from 'axios';



function ContactMe() {
    const [status, setStatus] = useState(true);
    const [alertMsg, setAlertMsg] = useState('hahah');
    const [showAlert, setShowAlert] = useState(false);

    const [formData, setFormData] = useState({
        user: '',
        email: '',
        message: ''
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.user.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
            setShowAlert(true);
            setStatus(false);
            setAlertMsg('Please fill all fields');
            setTimeout(() => setShowAlert(false), 5000)
        }
        else {
            if (!formData.email.includes('@') || !formData.email.includes('.')) {
                setShowAlert(true);
                setStatus(false);
                setAlertMsg('Invalid email format');
                setTimeout(() => {setShowAlert(false);setAlertMsg('waiting')}, 5000);
            }
            // Your form submission logic here
            console.log(formData);
            setFormData({...formData , user:"",email:"",message:''})
            // After successful submission:
            setShowAlert(true);
            // Optionally, hide the alert after a few seconds:
            setTimeout(() => setShowAlert(false), 5000);
        }
    };


    return (
        <div className='relative h-full w-full p-2  flex flex-col bg-[#f8f6f6] dark:bg-[#1c1917] dark:text-[#fafaf9] items-center font-poppins'>
            <div className="mockup-browser bg-base-300 border relative h-[80vh] w-[90%] flex flex-col bg-gray-100">
                <div className="mockup-browser-toolbar">
                    <div className="input bg-white">https://www.linkedin.com/in/chinmaylale/</div>
                </div>
                <div className='relative w-full h-full bg-red -300 flex flex-row items-center max-[650px]:flex-col'>
                    <div className='relative w-[50%] h-full bg-re d-500 flex flex-col p-[2%] border-r-gray-500 border max-[650px]:w-[98%] max-[650px]:text-center max-[650px]:border-none max-[650px]:justify-center'>
                        <h1 className='relative text-[3vmax] max-[650px]:text-[3.5vmax] font-[600] font-poppins'>I'd like to here from you.</h1>

                    </div>
                    <div className='relative w-[50%] h-full bg-y ellow-50 p-[1%] max-[650px]:w-[98%]'>
                        <div class="max-w-md mx-auto p-8 bg-[#fafaf9] rounded-md shadow-md form-container scale-90">
                            <h2 class="text-2xl font-semibold text-gray-950 mb-6">Say Something!</h2>
                            {showAlert && <AlertGood status={status} msg={alertMsg} />}
                            <form  method="POST">
                                <div class="mb-4">
                                    <label for="name" class="block text-gray-950 text-sm font-bold mb-2">Your Name</label>
                                    <input type="text" id="name" name="name" placeholder="John Doe" required
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black bg-gray-50 text-black" onChange={(e) => { setFormData({ ...formData, user: e.target.value }) }} value={formData.user} />
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block text-gray-950 text-sm font-bold mb-2">Your Email</label>
                                    <input type="email" id="email" name="email" placeholder="john@example.com" required
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black bg-gray-50 text-black" onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} value={formData.email} />
                                </div>
                                <div class="mb-6">
                                    <label for="message" class="block text-gray-950 text-sm font-bold mb-2">Your Message</label>
                                    <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black bg-gray-50 text-black" onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }} value={formData.message}></textarea>
                                </div>
                                <button type="submit"
                                    class="bg-gray-500 text-gray-950 px-4 py-2 rounded-md hover:bg-gray-950 hover:text-gray-50 focus:outline-none focus:shadow-outline-blue" onClick={handleSubmit}>
                                    Send Message
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe