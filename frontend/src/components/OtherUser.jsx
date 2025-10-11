import React from 'react';
import OtherUs from './OtherUs';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from 'react-redux';

const OtherUser = () => {
  //my custom hooks
  useGetOtherUsers();
  const { otherUsers } = useSelector(store => store.user);
  if (!otherUsers) { //early return in react 
    return;
  }
  return (
    <div className='overflow-auto flex-1'>
      {
        otherUsers?.map((user) => {
          return (
            <OtherUs key={user._id} user={user} />
          )
        })
      }
    </div>
  );
};

export default OtherUser;
