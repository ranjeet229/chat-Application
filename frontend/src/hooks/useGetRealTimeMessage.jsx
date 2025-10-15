import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetRealTimeMessage = () => {
  const { socket } = useSelector((store) => store.socket);
  const { messages } = useSelector((store) => store.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      // Append message instantly
      dispatch(setMessages([...messages, newMessage]));
    };

    socket.on("newMessage", handleNewMessage);

    // Cleanup
    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, messages, dispatch]);
};

export default useGetRealTimeMessage;
