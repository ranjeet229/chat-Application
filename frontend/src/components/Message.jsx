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
                    className="chat-bubble 
                        bg-zinc-800/70 backdrop-blur-lg 
                        border border-white/10 
                        text-white 
                        shadow-lg 
                        rounded-2xl 
                        transition-all duration-300 
                        hover:bg-zinc-700/80 hover:shadow-xl
                        relative
                        max-w-[70%]
                        break-words
                        px-3 py-2
                        pr-10 pb-5"  // <-- Added padding-right & padding-bottom
                >
                    <span>{message?.message}</span>

                    {/* Time inside bubble */}
                    <div className="absolute bottom-1 right-2 text-[10px] text-gray-400">
                        {timeFormatted}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Message;
