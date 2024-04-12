import React from 'react'
import './index.css'

const ChatPage = () => {
  return (
    <div className="chat-page-container">
      {/* Chat Area */}
      <div className="chat-area">
        <h4>Chat Name</h4>
        <div className="chat-messages">
          {/* Individual chat messages */}
          <div className="message">Message 1</div>
          <div className="message">Message 2</div>
          <div className="message">Message 3</div>
          {/* Add more messages as needed */}
        </div>
        {/* Input area for typing new message */}
        <div className="input-area">
          <input type="text" placeholder="Type a message..." />
          <button className="send-btn">Send</button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="chat-sidebar">
        {/* Chat name */}
        <div className="chat-name">Chat Name</div>
        {/* Options */}
        <div className="options">
          <div className="option">New Chat</div>
          <div className="option">Voice</div>
          <div className="option">History</div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
