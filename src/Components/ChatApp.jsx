import React, { useState } from 'react';

const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [showChatList, setShowChatList] = useState(true);

  // ... (chats and messages arrays remain the same)
  const chats = [
    { id: 1, name: 'John Doe', lastMessage: 'Lorem ipsum dolor sit amet.' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Consectetur adipiscing elit.' },
    { id: 3, name: 'Bob Johnson', lastMessage: 'Sed do eiusmod tempor incididunt.' },
    { id: 4, name: 'Alice Brown', lastMessage: 'Ut labore et dolore magna aliqua.' },
    { id: 5, name: 'Charlie Davis', lastMessage: 'Ut enim ad minim veniam.' },
  ];

  const messages = [
    { id: 1, sender: 'John Doe', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', timestamp: '10:30 AM' },
    { id: 2, sender: 'You', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', timestamp: '10:32 AM' },
    { id: 3, sender: 'John Doe', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', timestamp: '10:33 AM' },
    { id: 4, sender: 'You', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', timestamp: '10:35 AM' },
    { id: 5, sender: 'John Doe', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.', timestamp: '10:36 AM' },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Add logic to send the message
    console.log('Sending message:', message);
    setMessage('');
  };

  const toggleChatList = () => {
    setShowChatList(!showChatList);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Chat list */}
      <div className={`${showChatList ? 'block' : 'hidden'} md:block w-full md:w-1/3 lg:w-1/4 bg-white border-r`}>
        <div className="p-4 bg-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Chats</h2>
          <button onClick={toggleChatList} className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul>
          {chats.map((chat) => (
            <li
              key={chat.id}
              className="p-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedChat(chat);
                setShowChatList(false);
              }}
            >
              <h3 className="font-semibold">{chat.name}</h3>
              <p className="text-gray-600 text-sm">{chat.lastMessage}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat area */}
      <div className={`${!showChatList ? 'block' : 'hidden'} md:block w-full md:w-2/3 lg:w-3/4 flex flex-col`}>
        {selectedChat ? (
          <>
            <div className="p-4 bg-gray-200 flex justify-between items-center">
              <button onClick={toggleChatList} className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h2 className="text-xl font-semibold">{selectedChat.name}</h2>
              <div className="w-6"></div> {/* Placeholder for alignment */}
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-4 ${
                    msg.sender === 'You' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      msg.sender === 'You'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300'
                    }`}
                  >
                    <p>{msg.content}</p>
                    <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="p-4 bg-gray-200">
              <div className="flex">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 p-2 rounded-l-lg"
                  placeholder="Type a message..."
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded-r-lg"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;