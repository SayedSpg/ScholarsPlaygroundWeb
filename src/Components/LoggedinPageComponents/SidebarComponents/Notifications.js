import React from 'react';
import './SidebarPagesStyle.css';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import UserLogin from '../UserLogin';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


function Notifications() {
    return (
        <div className="notifications mt-5">
            <div className="WatchingViewLnk">
                <Link to="loggedinview">
                    <KeyboardBackspaceIcon />
                    back to Loggedin View Page
                </Link>
            </div>
            <UserLogin />
            <div className="notificationsSections">
                {/* <h1>Notifications page</h1> */}
                <Sidebar />
                <div className="notificationsContent">
                    <h1>Notifications Page Content</h1>
                </div>
            </div>
        </div>
    );
}

export default Notifications;
