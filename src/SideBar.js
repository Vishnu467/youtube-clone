import React from 'react'
import "./SideBar.css"
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutLinedIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutLinedIcon from "@material-ui/icons/ExpandMore";
import SidebarRow from './SidebarRow';


function SideBar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={WhatshotIcon}title="Trending" />
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
         <hr/>
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow Icon={HistoryIcon} title="History" />
        <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow Icon={ThumbUpAltOutLinedIcon} title="Liked video" />
        <SidebarRow Icon={ExpandMoreOutLinedIcon} title="Show more" />
        <hr/>
    </div>
  )
}
export default SideBar