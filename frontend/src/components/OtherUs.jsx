import React from 'react'

const OtherUs = (props) => {
    const user = props.user;
    return (
        <div>
            <div className="flex gap-2 items-center rounded-md p-2 cursor-pointer transition-colors duration-200 hover:bg-white/10">
                <div className="avatar avatar-online">
                    <div className="w-12 rounded-full overflow-hidden">
                        <img
                            src={user?.profilePhoto}
                            alt="user-profile"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between gap-2">
                        <p className="text-white text-sm font-medium">{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
        </div>
    )
}

export default OtherUs