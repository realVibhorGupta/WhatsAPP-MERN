import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { IconButton , Avatar} from '@material-ui/core';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className ="sidebar">
            <div className="sidebar__header">
            <Avatar src="https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-19/s150x150/84386316_880756725697895_6262997288998666240_n.jpg?_nc_ht=instagram.fdel27-1.fna.fbcdn.net&_nc_ohc=jlP-Uk-c2N8AX-bRtRS&oh=c03850bb3fa01767ff0fb690b564e27e&oe=5FBC5065" alt=""/>
                <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                </div>
            </div>

            <div className = "sidebar__search">
               <div className = "sidebar__searchContainer">
                   <SearchOutlined/>
                    <input placeholder = "Search or Start new Chat" type="text"/>
               </div>
            </div>
            <div className = "sidebar_chats">
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar;
