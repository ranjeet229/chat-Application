import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';

const MessageContainer = () => {
  return (
    <div className="md:min-w-[750px] flex flex-col flex-1 bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 shadow-inner">
  
      <div className="flex gap-2 items-center bg-white/10 backdrop-blur-md px-4 py-2 border-b border-white/20">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full overflow-hidden border-2 border-white/30">
            <img
              src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
              alt="user-profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p className="text-white text-sm font-medium">Ranjeet Kumar</p>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-4 overflow-y-auto">
        <Messages/>
      </div>

      {/* Send Input pinned at bottom */}
      <div className="border-t border-white/20">
        <SendInput />
      </div>
    </div>
  );
};

export default MessageContainer;
