import React from 'react';
import { MdSearch } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white/10 text-white p-4 flex flex-col space-y-4 backdrop-blur-lg border-r border-white/20 shadow-md">
      {/* Search Form */}
      <form className="flex items-center space-x-2 bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/20">
        <input
          className="flex-1 bg-transparent outline-none placeholder-gray-300 text-sm text-white"
          type="text"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="p-2 bg-white/20 hover:bg-white/30 rounded-md transition-colors duration-200"
        >
          <MdSearch size={20} />
        </button>
      </form>

      {/* Sidebar Items */}
      <div className="flex flex-col space-y-2 mt-4">
        <button className="text-left px-3 py-2 rounded-md hover:bg-white/10 transition">
          Messages
        </button>
        <button className="text-left px-3 py-2 rounded-md hover:bg-white/10 transition">
          Contacts
        </button>
        <button className="text-left px-3 py-2 rounded-md hover:bg-white/10 transition">
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
