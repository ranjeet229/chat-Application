import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setMessages } from '../redux/messageSlice';

const SendInput = () => {
  
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector(store => store.user);
  const {messages} = useSelector(store=>store.message);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // prevent empty messages
    if (!message.trim()) return;

    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,
        { message },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      console.log(res.data);
      dispatch(setMessages([...messages, res?.data?.newMessage]));

      // Clear the input field after message send
      setMessage("");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="px-4 py-3">
      <div className="w-full relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
