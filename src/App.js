import React, { useState } from 'react';
import axios from 'axios';
import ChatBox from './ChatBox';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { role: 'user', content: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      try {
        const response = await axios.post(
          'https://api-inference.huggingface.co/models/EleutherAI/gpt-j-6B',
          {
            inputs: input,
          },
          {
            headers: {
              'Authorization': `Bearer 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`,
              'Content-Type': 'application/json'
            }
          }
        );

        const botMessage = { role: 'assistant', content: response.data[0].generated_text };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Error fetching data from API: ", error);
      }

      setInput('');
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="chat-container">
        <ChatBox messages={messages} />
        <form className="input-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="input-box"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
