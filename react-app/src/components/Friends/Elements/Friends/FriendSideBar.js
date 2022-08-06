import React from "react";
import { NavLink } from "react-router-dom";

function FriendSideBar({ friendTab, setFriendTab }) {
    // const [friendTab, setFriendTab] = useState("home");

    return (
        <div className="friend-sidebar">
            <h2>Friends</h2>
            <NavLink to="/friends">All Users</NavLink>
        </div>
    );
}

export default FriendSideBar;
