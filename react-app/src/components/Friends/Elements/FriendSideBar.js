import React, { useState } from "react";

function FriendSideBar({ friendTab, setFriendTab }) {
    // const [friendTab, setFriendTab] = useState("home");

    return (
        <div>
            <h2>Friends</h2>
            <select
                name="friendTabSelect"
                size={5}
                value={friendTab}
                onChange={e => setFriendTab(e.target.value)}>
                <option value="home">Home</option>
                <option value="friend-requests">Friend Requests</option>
                <option value="all-friends">All Friends</option>
            </select>
        </div>
    );
}

export default FriendSideBar;
