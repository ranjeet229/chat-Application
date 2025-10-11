import React, { useEffect } from 'react'
import axios from 'axios';
const useGetMessages = () => {
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8080/api/v1/message/68e530c789aaa96809789643`)
            } catch (error) {
                console.log(error);

            }
        }
        fetchMessage();
    }, []);
}

export default useGetMessages