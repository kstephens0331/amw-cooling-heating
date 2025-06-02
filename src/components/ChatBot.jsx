import React, { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import axios from 'axios';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi there! I'm the AMW Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage = { from: 'user', text: input };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        history: updatedMessages.map((m) => ({
          role: m.from === 'bot' ? 'assistant' : 'user',
          content: m.text,
        })),
        userMessage: input,
      });

      const botReply = response.data.message;
      setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: "Oops! Something went wrong. Please try again." },
      ]);
    }

    setInput('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>

      {isOpen && (
        <div className="mt-2 w-72 max-h-[80vh] bg-white border border-gray-300 rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="bg-blue-600 text-white px-4 py-2 flex items-center space-x-2">
            <img src="/assets/logo.png" alt="AMW Logo" className="w-6 h-6 rounded-full" />
            <h2 className="text-sm font-semibold">AMW Assistant</h2>
          </div>

          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={
                  msg.from === 'bot'
                    ? 'text-left bg-gray-100 p-2 rounded shadow-sm'
                    : 'text-right bg-blue-100 text-blue-800 p-2 rounded shadow-sm'
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="border-t p-2 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 p-2 text-sm border border-gray-300 rounded"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
