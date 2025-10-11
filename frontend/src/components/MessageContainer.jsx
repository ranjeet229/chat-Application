import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector } from 'react-redux';

const MessageContainer = () => {
  const {selectedUser} = useSelector(store=>store.user);
  return (
    <div className="md:min-w-[750px] flex flex-col flex-1 bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 shadow-inner">
      
      {/* header */}
      <div className="flex gap-3 items-center bg-zinc-800/70 backdrop-blur-md px-4 py-3 border-b border-white/10 shadow-md">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full overflow-hidden border-2 border-white/20 shadow-sm">
            <img
              src={selectedUser?.profilePhoto}
              alt="user-profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p className="text-white text-sm font-medium">{selectedUser?.fullName}</p>
          </div>
        </div>
      </div>

      {/* Messages area (unchanged) */}
      <div className="flex-1 p-4 overflow-y-auto">
        <Messages />
      </div>

      {/* Send Input (unchanged) */}
      <div className="border-t border-white/20">
        <SendInput />
      </div>
    </div>
  );
};

export default MessageContainer;
