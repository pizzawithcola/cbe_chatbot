import React from 'react';

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
