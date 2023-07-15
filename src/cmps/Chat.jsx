import React, { useState, useEffect } from 'react';
import '../style.css';
import { Server } from 'mock-socket';


function ChatComponent() {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const socket = new Server('ws://localhost:5173');

    socket.on('connection', (server) => {
      server.on('message', (receivedMessage) => {
        const messageObject = JSON.parse(receivedMessage);
        setChatMessages((prevMessages) => [...prevMessages, messageObject]);
      });
    });

    return () => {
      socket.close();
    };
  }, []);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      id: Date.now(),
      text: message,
    };

    socket.send(JSON.stringify(newMessage));

    setChatMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {chatMessages.map((msg) => (
          <div key={msg.id}>{msg.text}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatComponent;