import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Message = ({ message }) => {
    const scroll = useRef();
    const {authUser, selectedUser} = useSelector(store=>store.user);
    useEffect(() =>{
        scroll.current?.scrollIntoView({behavior:"smooth"});
    },[message]);
    return (
        <div ref={scroll} className={`chat ${authUser?._id === message?.senderId ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full border border-white/20 shadow-sm">
                    <img
                        src={message?.senderId === authUser?._id ? authUser?.profilePhoto : selectedUser?.profilePhoto}
                        alt="Obi-Wan Kenobi"
                    />
                </div>
            </div>

            <div className="chat-header text-white">
                <time className="text-xs opacity-50 ml-2">12:45</time>
            </div>

            <div
                className="chat-bubble 
                   bg-zinc-800/70 backdrop-blur-lg 
                   border border-white/10 
                   text-white 
                   shadow-lg 
                   rounded-2xl 
                   transition-all duration-300 
                   hover:bg-zinc-700/80 hover:shadow-xl"
            >
                {message?.message}
            </div>
        </div>
    );
};

export default Message;
