import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
            {friends ? (
                friends.map(friend => {
                    return (
                        <Link key={friend.id} to={`/profile/${friend.id}/`}>
                            <div className="rightside-friend">
                                <img
                                    src={
                                        friend.profile_pic ? friend.profile_pic : defaultProfilePic
                                    }
                                    alt="profile"
                                />
                                <span>{`${friend.first_name} ${friend.last_name}`}</span>
                            </div>
                        </Link>
                    );
                })
            ) : (
                <h4>No friends!</h4>
            )}
        </div>
    );
}

export default RightSideBar;
