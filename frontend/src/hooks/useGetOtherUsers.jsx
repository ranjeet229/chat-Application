import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://chat-application-1-w46p.onrender.com/api/v1/user/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
        dispatch(setOtherUsers(res.data));
      } catch (error) {
        console.error("Error fetching other users:", error.response?.data || error);
      }
    };

    fetchOtherUsers();
  }, [dispatch]);
};

export default useGetOtherUsers;
