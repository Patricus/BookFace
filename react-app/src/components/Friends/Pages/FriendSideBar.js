import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function FriendSideBar() {
  const friendRequestsNum = Object.keys(useSelector(state => state.requests.received)).length;

  return (
    <div className="friend-sidebar">
      <h2>Friends</h2>
      <NavLink
        to="/friends/"
        exact={true}
      >
        Home
      </NavLink>
      <NavLink
        to="/friends/requests"
        exact={true}
        style={{ position: "relative" }}
      >
        Friend Requests
        {friendRequestsNum > 0 && <div id="friend-requests-num">{friendRequestsNum}</div>}
      </NavLink>
      <NavLink
        to="/friends/list"
        exact={true}
      >
        All Friends
      </NavLink>
    </div>
  );
}

export default FriendSideBar;
