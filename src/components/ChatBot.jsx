import React, { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { logger } from '../utils/logger';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hey! Thanks for reaching out to AMW Cooling & Heating. What's your name?" },
  ]);
  const [input, setInput] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactFormData, setContactFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [chatHistorySent, setChatHistorySent] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage = { from: 'user', text: input };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setInput('');

    try {
      // Call Texas server backend (keeps API key secure server-side)
      const response = await axios.post(
        'https://amwairconditioning.com/api/chat',
        {
          history: updatedMessages.map((m) => ({
            role: m.from === 'bot' ? 'assistant' : 'user',
            content: m.text,
          })),
          userMessage: input,
        }
      );

      const botReply = response.data.message;
      setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);

      // Check if bot suggests speaking to someone (trigger contact form)
      if (botReply.toLowerCase().includes('call us') || botReply.toLowerCase().includes('speak with') || botReply.toLowerCase().includes('contact us')) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { from: 'bot', text: "Would you like me to have someone reach out to you? Click the button below to share your contact information.", isAction: true },
          ]);
        }, 500);
      }
    } catch (error) {
      logger.error('Chatbot Error:', error);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: "Oops! Something went wrong. Please try again or call us at (936) 331-1339 for immediate assistance." },
      ]);
    }
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'https://amwairconditioning.com/api/send-email',
        {
          name: contactFormData.name,
          email: contactFormData.email,
          phone: contactFormData.phone,
          message: contactFormData.message,
          source: 'chatbot',
        }
      );

      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: "Thank you! Your information has been sent to our team. Someone will reach out to you shortly at the contact information you provided." },
      ]);
      setShowContactForm(false);
      setContactFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      logger.error('Contact form error:', error);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: "Sorry, there was an issue submitting your information. Please call us directly at (936) 331-1339." },
      ]);
    }
  };

  const handleCloseChat = async () => {
    // Send chat history email if there were user messages and it hasn't been sent yet
    const hasUserMessages = messages.some(msg => msg.from === 'user');

    if (hasUserMessages && !chatHistorySent) {
      try {
        // Format chat history for email
        const chatHistory = messages.map(msg => `${msg.from === 'bot' ? 'AMW Assistant' : 'Customer'}: ${msg.text}`).join('\n\n');

        await axios.post(
          'https://amwairconditioning.com/api/send-chat-history',
          {
            chatHistory,
            timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })
          }
        );

        setChatHistorySent(true);
      } catch (error) {
        logger.error('Failed to send chat history:', error);
        // Still close the chat even if email fails
      }
    }

    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-60 flex flex-col items-start">
      <button
        onClick={() => isOpen ? handleCloseChat() : setIsOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition flex items-center gap-2"
      >
        {isOpen ? (
          <>
            <FaTimes />
            <span>Close</span>
          </>
        ) : (
          <>
            <FaRobot />
            <span>Chat Now</span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="mt-2 w-72 max-h-[80vh] bg-white border border-gray-300 rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="bg-blue-600 text-white px-4 py-2 flex items-center space-x-2">
            <img src="/logo192.png" alt="AMW Cooling & Heating AI chatbot assistant" className="w-6 h-6 rounded-full" />
            <h2 className="text-sm font-semibold">AMW Assistant</h2>
          </div>

          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx}>
                <div
                  className={
                    msg.from === 'bot'
                      ? 'text-left bg-gray-100 p-2 rounded shadow-sm'
                      : 'text-right bg-blue-100 text-blue-800 p-2 rounded shadow-sm'
                  }
                >
                  {msg.text}
                </div>
                {msg.isAction && (
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition"
                  >
                    Request Callback
                  </button>
                )}
              </div>
            ))}

            {showContactForm && (
              <div className="bg-white border border-gray-300 p-3 rounded shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">Request a Callback</h3>
                <form onSubmit={handleContactFormSubmit} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactFormData.name}
                    onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                    className="w-full p-2 text-xs border border-gray-300 rounded"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={contactFormData.email}
                    onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                    className="w-full p-2 text-xs border border-gray-300 rounded"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={contactFormData.phone}
                    onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
                    className="w-full p-2 text-xs border border-gray-300 rounded"
                    required
                  />
                  <textarea
                    placeholder="Additional details (optional)"
                    value={contactFormData.message}
                    onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                    className="w-full p-2 text-xs border border-gray-300 rounded"
                    rows="2"
                  ></textarea>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className="flex-1 bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-400 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
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
