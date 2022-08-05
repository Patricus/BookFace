import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../../../../store/friends";
import UserCard from "../Users/UserCard";

function Friends() {
    const friends = useSelector(state => state.friends);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriends());
    }, [dispatch]);

    return (
        <div>
            {friends &&
                Object.values(friends).map(friend => <UserCard key={friend.id} friend={friend} />)}
        </div>
    );
}

export default Friends;
