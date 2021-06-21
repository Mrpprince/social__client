import React from 'react';
import './Profile.css'
import Topbar from '../../Components/Topbar/Topbar';
import SideBar from '../../Components/sideBar/SideBar';
import RightBar from '../../Components/rightBar/RightBar';
import Feed from '../../Components/feed/Feed';
const Profile = () => {
    return (
        <div>
            <Topbar></Topbar>
            <div className="profile">
                <SideBar></SideBar>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/post/3.jpeg" className="profileCoverImage" alt="" />
                            <img src="/assets/person/7.jpeg" className="profileUserImage" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName"> safak kaolvuke</h4>
                            <p className="profileInfoDescription">Hello my friends</p>
                        </div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed></Feed>
                        <RightBar profile></RightBar>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;