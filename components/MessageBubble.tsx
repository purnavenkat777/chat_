
import React from 'react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
  isOwnMessage: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isOwnMessage }) => {
  const isSystem = message.sender === 'System';
  const isBot = message.sender === 'ChatBot';

  if (isSystem) {
    return (
      <div className="text-center my-2">
        <span className="px-3 py-1 text-xs text-gray-400 bg-gray-700 rounded-full">{message.text}</span>
      </div>
    );
  }
  
  if (isBot) {
    return (
        <div className="flex justify-start items-end">
            <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-lg bg-gray-600">
                 <p className="text-sm font-bold text-yellow-300 mb-1">{message.sender}</p>
                 <p className="text-white">{message.text}</p>
                 <p className="text-right text-xs text-gray-400 mt-1">{message.timestamp}</p>
            </div>
        </div>
    );
  }

  return (
    <div className={`flex items-end ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${isOwnMessage ? 'bg-indigo-600' : 'bg-gray-600'}`}>
        {!isOwnMessage && (
          <p className="text-sm font-bold text-indigo-300 mb-1">{message.sender}</p>
        )}
        <p className="text-white">{message.text}</p>
        <p className="text-right text-xs text-gray-300 mt-1">{message.timestamp}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
