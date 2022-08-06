import React from "react";
import { NavLink } from "react-router-dom";

function UserSideBar() {
    // const [friendTab, setFriendTab] = useState("home");

    return (
        <div className="friend-sidebar">
            <h2>Users</h2>
            <NavLink to="/friends/requests">Friend Requests</NavLink>
            <NavLink to="/friends/list">All Friends</NavLink>
        </div>
    );
}

export default UserSideBar;
