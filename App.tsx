
import React, { useState, useEffect } from 'react';
import Lobby from './components/Lobby';
import ChatRoom from './components/ChatRoom';
import { Message } from './types';

const App: React.FC = () => {
  const [room, setRoom] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Generate a random username for the session
    setUserName(`User-${Math.floor(Math.random() * 1000)}`);
  }, []);

  const handleJoinRoom = (roomName: string) => {
    if (roomName.trim()) {
      setRoom(roomName);
      // NOTE: In a real app, you would connect to the WebSocket server here
      // and join the specified room. We'll simulate with a welcome message.
      setMessages([
        {
          id: 'system-1',
          text: `Welcome to the '${roomName}' room!`,
          sender: 'System',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
        {
          id: 'bot-1',
          text: 'This is a demo. Messages are not sent to other users.',
          sender: 'ChatBot',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    }
  };

  const handleSendMessage = (messageText: string) => {
    if (messageText.trim()) {
      const newMessage: Message = {
        id: new Date().toISOString(),
        text: messageText,
        sender: userName,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      // NOTE: In a real app, you would emit a 'sendMessage' event to the server.
      // The server would then broadcast it to the room.
      // Here, we just update the local state.
      setMessages(prevMessages => [...prevMessages, newMessage]);
    }
  };
  
  const handleLeaveRoom = () => {
      setRoom('');
      setMessages([]);
  };

  return (
    <div className="font-sans antialiased">
      {!room ? (
        <Lobby onJoin={handleJoinRoom} />
      ) : (
        <ChatRoom
          roomName={room}
          userName={userName}
          messages={messages}
          onSendMessage={handleSendMessage}
          onLeaveRoom={handleLeaveRoom}
        />
      )}
    </div>
  );
};

export default App;
