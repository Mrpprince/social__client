import React from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import SideBar from '../../Components/sideBar/SideBar';
import RightBar from '../../Components/rightBar/RightBar';
import Feed from '../../Components/feed/Feed';
import './home.css'



const Home = () => {
    return (
        <div>
          <Topbar></Topbar>
          <div className="homeContainer">
              <SideBar></SideBar>
              <Feed></Feed>
              <RightBar></RightBar>
          </div>
        </div>
    );
};

export default Home;