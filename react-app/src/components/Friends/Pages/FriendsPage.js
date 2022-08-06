import React from "react";
import Friends from "../Elements/Friends/Friends";
import FriendSideBar from "../Elements/Friends/FriendSideBar";

function FriendsPage() {
    return (
        <div className="friend-page">
            <div>
                <FriendSideBar />
            </div>
            <div>
                <Friends />
            </div>
        </div>
    );
}

export default FriendsPage;
