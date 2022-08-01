import React, {useState} from 'react';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
        <div className="header__left">
                 <MenuIcon />
                 <Link to="/" > 
                     <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/375px-YouTube_Logo_2017.svg.png" alt="" />
                 </Link>
            </div>
        <div className='header__input'>
        <input onChange={e => setInputSearch(e.target.value)} type="text" value={inputSearch} placeholder="Search"></input> 
        <Link to={`/search/${inputSearch}`} >
            <SearchIcon className="header__inputButton"/>
        </Link>
        </div>
        <div className='header__icons'>
        <VideoCallIcon className="header__icon"></VideoCallIcon>
        <AppsIcon className="header__icon"></AppsIcon>
        <NotificationsIcon className="header__icon"></NotificationsIcon>
        <Avatar
        src='https://pbs.twimg.com/profile_images/1487406057446346754/S10P50vs_400x400.jpg'
        alt='Vishnu'
        ></Avatar>
        </div>  
    </div>
  )
}

export default Header