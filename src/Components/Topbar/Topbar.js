import {  Chat, Notifications, Person, Search } from '@material-ui/icons';
import React from 'react';
import './Topbar.css'

const Topbar = () => {
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <span className="logo">LamaSocial</span>
            </div>
            <div className="topBarCenter">
                <div className="searchBar">
                   <Search className="searchIcon"></Search>
                    <input type="text" placeholder="Search for friend , posts or videos" className="InputSearch" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <span className="topBarLink">Homepage</span>
                    <span className="topBarLink">Timeline</span>
                </div>
                <div className="topBarIcons">
                    <div className="topBarIconItem">
                        <Person></Person>
                        <span className="topBarIconBadge">3</span>
                    </div>
                    <div className="topBarIconItem">
                        <Chat></Chat>
                        <span className="topBarIconBadge">2</span>
                    </div>
                    <div className="topBarIconItem">
                        <Notifications></Notifications>
                        <span className="topBarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" className="topBarImage" alt=""/>
            </div>
        </div>
    );
};

export default Topbar;