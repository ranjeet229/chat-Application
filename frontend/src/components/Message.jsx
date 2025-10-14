import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const Message = ({ message, showDateSeparator }) => {
    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.user);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    const isOwnMessage = authUser?._id === message?.senderId;
    const timeFormatted = dayjs(message?.createdAt).format('h:mm A');

    const getDateLabel = () => {
        const today = dayjs();
        const msgDate = dayjs(message?.createdAt);

        if (msgDate.isSame(today, 'day')) return 'Today';
        if (msgDate.isSame(today.subtract(1, 'day'), 'day')) return 'Yesterday';
        return msgDate.format('MMM D, YYYY');
    };

    return (
        <>
            {/* Optional date separator */}
            {showDateSeparator && (
                <div className="text-center text-xs text-gray-400 my-2">
                    {getDateLabel()}
                </div>
            )}

            <div
                ref={scroll}
                className={`chat ${isOwnMessage ? 'chat-end' : 'chat-start'}`}
            >
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full border border-white/20 shadow-sm">
                        <img
                            src={
                                isOwnMessage
                                    ? authUser?.profilePhoto
                                    : selectedUser?.profilePhoto
                            }
                            alt="user avatar"
                        />
                    </div>
                </div>

                <div
                    className={`chat-bubble 
        ${isOwnMessage ? 'bg-purple-900 hover:bg-purple-700' : 'bg-zinc-900/70 hover:bg-zinc-700/80'} 
        backdrop-blur-lg 
        border border-white/10 
        text-white 
        shadow-lg 
        rounded-2xl 
        transition-all duration-300
        relative
        max-w-[70%]
        break-words
        px-3 py-2
        pr-10 pb-5`}
                >
                    <span>{message?.message}</span>

                    {/* Time */}
                    <div className={`absolute bottom-1 right-2 text-[10px] 
        ${isOwnMessage ? 'text-purple-200' : 'text-gray-400'}`}>
                        {timeFormatted}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Message;
