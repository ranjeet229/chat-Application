import React from 'react';
import { IoSend } from "react-icons/io5";

const SendInput = () => {
  return (
    <form className="px-4 py-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message..."
          className="w-full p-3 pr-10 rounded-lg 
                     bg-zinc-800/70 text-white placeholder-gray-400 
                     border border-white/10 
                     focus:outline-none focus:ring-2 focus:ring-white/20 
                     backdrop-blur-md shadow-lg
                     transition-all duration-200"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 
                     text-white hover:text-white/70 
                     transition-colors duration-200"
        >
          <IoSend size={20} />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
