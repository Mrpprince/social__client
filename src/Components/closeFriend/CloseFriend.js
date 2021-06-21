import React from 'react';
import './CloseFriend.css'

const CloseFriend = ({ user }) => {
    return (
        <li className="sideBarFriend">
            <img src={user.profilePicture} className="sideBarFriendImage" alt="" />
            <span className="sideBarFriendName">{user.username}</span>
        </li>
    );
};

export default CloseFriend;