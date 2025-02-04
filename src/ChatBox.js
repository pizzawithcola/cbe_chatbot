import React from 'react';
import './ChatBox.css';

function ChatBox({ messages }) {
  return (
    <div className="chat-box">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.role}`}>
          <p>{msg.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatBox;
