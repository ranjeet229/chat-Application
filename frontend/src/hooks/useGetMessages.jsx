import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const useGetMessages = () => {
    const {selectedUser} = useSelector(store=>store.user);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`https://chat-application-1-w46p.onrender.com/api/v1/message/${selectedUser?._id}`);
                console.log(res);
                dispatch(setMessages(res.data))
            } catch (error) {
                console.log(error);

            }
        }
        fetchMessage();
    }, [selectedUser]);
}

export default useGetMessages