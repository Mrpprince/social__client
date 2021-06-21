import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilled, RssFeed, School, VerifiedUserSharp, WorkOffOutlined } from '@material-ui/icons';
import React from 'react';
import './SideBar.css';
import {Users} from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend';
const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="sideBarWrapper">
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        <RssFeed className="sideBarIcon"></RssFeed>
                        <span className="sideBarListItemText">Feed</span>
                    </li>
                    <li className="sideBarListItem">
                        <Chat className="sideBarIcon"></Chat>
                        <span className="sideBarListItemText">Chats</span>
                    </li>
                    <li className="sideBarListItem">
                        <PlayCircleFilled className="sideBarIcon"></PlayCircleFilled>
                        <span className="sideBarListItemText">Videos</span>
                    </li>
                    <li className="sideBarListItem">
                        <Group className="sideBarIcon"></Group>
                        <span className="sideBarListItemText">Groups</span>
                    </li>
                    <li className="sideBarListItem">
                        <Bookmark className="sideBarIcon"></Bookmark>
                        <span className="sideBarListItemText">Bookmarks</span>
                    </li>
                    <li className="sideBarListItem">
                        <HelpOutline className="sideBarIcon"></HelpOutline>
                        <span className="sideBarListItemText">Questions</span>
                    </li>
                    <li className="sideBarListItem">
                        <WorkOffOutlined className="sideBarIcon"></WorkOffOutlined>
                        <span className="sideBarListItemText">Jobs</span>
                    </li>
                    <li className="sideBarListItem">
                        <Event className="sideBarIcon"></Event>
                        <span className="sideBarListItemText">Events</span>
                    </li>
                    <li className="sideBarListItem">
                        <School className="sideBarIcon"></School>
                        <span className="sideBarListItemText">Courses</span>
                    </li>

                </ul>
                <button className="sideBarButton">Show More</button>
                <hr className="sideBarHr" />
                <ul className="sideBarFriendList">
                    {
                        Users.map(u=>(
                            <CloseFriend key={u.id} user={u}></CloseFriend>
                        ))
                    }
                   
                </ul>
            </div>
        </div>
    );
};

export default SideBar;