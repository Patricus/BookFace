import React from "react";
import { NavLink } from "react-router-dom";

function RequestSideBar() {
    // const [friendTab, setFriendTab] = useState("home");

    return (
        <div className="friend-sidebar">
            <h2>Requests</h2>
            <NavLink to="/friends">All Users</NavLink>
        </div>
    );
}

export default RequestSideBar;
