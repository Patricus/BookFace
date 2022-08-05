import React, { useState } from "react";
import Friends from "../Elements/Friends/Friends";
import FriendSideBar from "../Elements/FriendSideBar";
import Requests from "../Elements/Requests/Requests";
import Users from "../Elements/Users/Users";

function FriendsPage() {
    const [friendTab, setFriendTab] = useState("home");

    return (
        <div>
            <h1>FriendsPage</h1>
            <div>
                <FriendSideBar friendTab={friendTab} setFriendTab={setFriendTab} />
                <div>
                    {
                        {
                            home: (
                                <>
                                    <h2>Home</h2>

                                    <Users />
                                </>
                            ),
                            "friend-requests": (
                                <>
                                    <h2>Friend Requests</h2>

                                    <Requests />
                                </>
                            ),
                            "all-friends": (
                                <>
                                    <h2>All Friends</h2>

                                    <Friends />
                                </>
                            ),
                        }[friendTab]
                    }
                </div>
            </div>
        </div>
    );
}

export default FriendsPage;
