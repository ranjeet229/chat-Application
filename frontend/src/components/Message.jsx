import React from 'react';

const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                        alt="Obi-Wan Kenobi"
                    />
                </div>
            </div>
            <div className="chat-header text-white">
                <time className="text-xs opacity-50 ml-2">12:45</time>
            </div>
            <div className="chat-bubble bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-200 rounded-2xl">
                You were the Chosen One!
            </div>
        </div>
    );
};

export default Message;
