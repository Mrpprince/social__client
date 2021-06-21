import React from 'react';
import './Online.css'

const Online = ({ user }) => {
    
    return (
        <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
                <img src={user.profilePicture} className="rightBarProfileImg" alt="" />
                <span className="rightBarOnline"></span>
            </div>
            <div className="rightBarUserName">
                {user.username}
            </div>
        </li>

    );
};

export default Online;