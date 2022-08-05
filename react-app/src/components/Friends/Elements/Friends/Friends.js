import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../../../../store/friends";
import FriendCard from "./FriendCard";

function Friends() {
    const friends = useSelector(state => state.friends);
    const dispatch = useDispatch();
    console.log("friends", friends);

    useEffect(() => {
        dispatch(getFriends());
    }, [dispatch]);

    return (
        <div>
            {friends &&
                Object.values(friends).map(friend => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
        </div>
    );
}

export default Friends;
