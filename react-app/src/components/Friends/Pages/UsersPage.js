import React from "react";
import Users from "../Elements/Users/Users";
import UserSideBar from "../Elements/Users/UserSideBar";

function UsersPage() {
    return (
        <div className="friend-page">
            <div>
                <UserSideBar />
            </div>
            <div>
                <Users />
            </div>
        </div>
    );
}

export default UsersPage;
