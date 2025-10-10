import React from 'react';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';

const HomePage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[600px] rounded-lg overflow-hidden bg-transparent border border-gray-200 backdrop-blur-md">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default HomePage;
