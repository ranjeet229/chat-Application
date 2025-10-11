import React from 'react';
import { MdSearch } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi"; // Logout icon
import OtherUser from './OtherUser';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/user/logout`);
            navigate("/login");
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className="w-64 bg-white/10 text-white p-4 flex flex-col space-y-4 backdrop-blur-lg border-r border-white/20 shadow-md">

            {/* Search Form */}
            <form className="flex items-center space-x-2 bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/20">
                <input
                    className="flex-1 bg-transparent outline-none placeholder-gray-300 text-sm text-white"
                    type="text"
                    placeholder="Search..."
                />
                <button type="submit" className="flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200">
                    <MdSearch size={20} />
                </button>
            </form>

            {/* Other User */}
            <OtherUser />

            {/* Logout Button */}
            <div className="mt-auto">
                <button onClick={logoutHandler}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition-colors duration-200 text-white text-sm font-medium">
                    <HiOutlineLogout size={20} />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
