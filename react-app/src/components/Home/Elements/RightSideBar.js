import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./rightSideBar.css";
import defaultProfilePic from "../../images/default-profile.png";
import { getFriends } from "../../../store/friends";

function RightSideBar() {
    const friends = Object.values(useSelector(state => state.friends));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriends());
    }, [dispatch]);

    return (
        <div id="right-sidebar">
            <h3>Contacts</h3>
            {friends &&
                friends.map(friend => {
                    {
                        console.log("friend", friend);
                    }
                    <div key={friend.id} className="rightside-friend">
                        <img
                            src={friend.profile_pic ? friend.profile_pic : defaultProfilePic}
                            alt="profile"
                        />
                        <span>{`${friend.first_name} ${friend.last_name}`}</span>
                    </div>;
                })}
        </div>
    );
}

export default RightSideBar;
