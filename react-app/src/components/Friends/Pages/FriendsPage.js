import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFriends } from "../../../store/friends";
import Friends from "../Elements/Friends/Friends";
import FriendSideBar from "../Elements/FriendSideBar";
import Requests from "../Elements/Requests/Requests";
import Users from "../Elements/Users/Users";

function FriendsPage() {
    const [friendTab, setFriendTab] = useState("home");

    const dispatch = useDispatch();

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
