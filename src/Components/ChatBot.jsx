import React, { useState, useRef, useEffect } from 'react'
import Lottie from "lottie-react";
import { io } from 'socket.io-client'
import chatbot from '../assets/chatbot.json'
import chatBotBlack from '../assets/chatBotBlack.json'

function ChatBot(props) {
    const [isBot, setIsBot] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! How can I help you today? Please choose an option:', options: ['Contact', 'Get Call From Chinmay', 'Send Chat Request'] }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);
    const socket = props.socket;
    
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (inputMessage.trim() !== '') {
            setMessages([...messages, { sender: 'user', text: inputMessage }]);
            if (!isBot) {
                socket.emit('user-msg', inputMessage.length > 1 ? inputMessage : "Chat Request Revived");
            }
            setInputMessage('');
            handleBotResponse(inputMessage);
        }
    }

    const handleOptionClick = (option) => {
        setMessages([...messages, { sender: 'user', text: option }]);
        handleBotResponse(option);
        if (!isBot) {
            setTimeout(() => {
                socket.emit('user-msg', inputMessage ? inputMessage : "Chat Request Revived from astrobot");
            }, 800)
        }
    }

    const handleBotResponse = (userInput) => {
        if (isBot) {
            setTimeout(() => {
                let botResponse = "I'm sorry, I didn't understand that. Can you please choose from the options provided?";
                if (isBot) {
                    switch (userInput.toLowerCase()) {
                        case 'contact':
                            botResponse = "Great! You can contact Chinmay at chinmay29.lale@gmail.com or call at +91-7620704050.";
                            break;
                        case 'get call from chinmay':
                            botResponse = "Sure, I'd be happy to arrange a call. Please enter your details (name, phone number) and Chinmay will contact you.";
                            setIsBot(false);
                            break;
                        case 'send chat request':
                            botResponse = "Just a moment, I will send the chat request to Chinmay. Thanks for your patience!";
                            setIsBot(false);
                            break;
                        default:
                            botResponse += " Here are your options:";
                    }

                    if (botResponse) {
                        setMessages(prev => [...prev, { sender: 'bot', text: botResponse, options: ['Contact', 'Get Call from Chinmay', 'Send Chat Request'] }])
                    }
                };
            }, 1000);
        }
    }

    //Socket Io Work
    useEffect(() => {
        if (socket) {
            socket.on('connect', (msg) => {
                console.log("MSG From Backend : ", msg)
            })

            socket.on('replay', (msg) => {
                const botResponse = msg;
                setMessages(prev => [...prev, { sender: 'bot', text: botResponse }])
            })

            socket.on('chinmay-msg', (msg) => {
                const botResponse = msg;
                setMessages(prev => [...prev, { sender: 'chinmay', text: botResponse }])
            })

        }
        return (() => {
            socket.emit('disconnect', 'disconnected From Server')
        })
    }, [])

    return (
        <div className='fixed bottom-4 right-2 cursor-pointer'>
            <Lottie
                animationData={chatBotBlack}
                loop={true}
                className={`w-28 h-28 transition-transform duration-300`}
                onClick={() => setIsOpen(!isOpen)}
            />

            <div className={`absolute z-[11] w-[20vw] max-[650px]:w-[80vw] h-[60vh] bottom-28 right-4 bg-transparent backdrop-blur-md rounded-lg flex flex-col ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[200%] opacity-0'} transition-all duration-500 ease-in-out border-solid border-2 border-gray-200`}>
                <div className="flex-1 overflow-y-auto p-4 z-[99]">
                    {messages.map((message, index) => (
                        <div key={index} className={`chat ${message.sender === 'bot' ? 'chat-start' : message.sender === 'chinmay' ? 'chat-start' : 'chat-end'}`}>
                            <div className="chat-image avatar">
                                <div className="w-8 rounded-full">
                                    <Lottie animationData={chatbot} loop={true} className='w-fit h-fit' />
                                </div>
                            </div>
                            <div className="chat-header">
                                {message.sender === 'bot' ? 'astroBot' : message.sender === 'chinmay' ? 'chinmay' : 'you'}
                            </div>
                            <div className={`chat-bubble text-sm ${message.sender === ('bot' || 'chinmay') ? 'bg-green-200' : 'bg-orange-50'} text-black`}>
                                {message.text}
                                {message.options && (
                                    <div className="mt-2">
                                        {message.options.map((option, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionClick(option)}
                                                className="bg-blue-500 text-white rounded px-2 py-1 mr-2 mt-2 text-xs"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
                    <div className="flex">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 border rounded-l-lg p-2 text-sm"
                        />
                        <button type="submit" className="bg-gray-800 text-gray-50 rounded-r-lg px-4 py-2 text-sm">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChatBot;
