import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../../../store/friends";
import Friend from "../Elements/Friend";
import FriendSideBar from "../Elements/FriendSideBar";
import Users from "../Elements/Users";

function FriendsPage() {
    const [friendTab, setFriendTab] = useState("home");

    const dispatch = useDispatch();
    const friends = useSelector(state => state.friends);

    useEffect(() => {
        dispatch(getFriends());
    }, [dispatch]);

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
                                    {friends &&
                                        Object.values(friends).map(friend => (
                                            <Friend friend={friend} />
                                        ))}
                                </>
                            ),
                            "all-friends": (
                                <>
                                    <h2>All Friends</h2>
                                    {friends &&
                                        Object.values(friends).map(friend => (
                                            <Friend friend={friend} />
                                        ))}
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
