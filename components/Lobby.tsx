
import React, { useState } from 'react';

interface LobbyProps {
  onJoin: (roomName: string) => void;
}

const Lobby: React.FC<LobbyProps> = ({ onJoin }) => {
  const [roomName, setRoomName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onJoin(roomName);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-2xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Chat Room
          </h1>
          <p className="mt-2 text-gray-400">Join a room to start chatting</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="room-name" className="sr-only">
              Room Name
            </label>
            <input
              id="room-name"
              name="room-name"
              type="text"
              autoComplete="off"
              required
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              placeholder="Enter a Room Name"
            />
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Join Chat
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lobby;
