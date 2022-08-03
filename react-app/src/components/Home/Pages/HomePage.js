import React from "react";
import RightSideBar from "../Elements/RightSideBar";
import LeftSideBar from "../Elements/LeftSideBar";
import PostFeed from "../Elements/PostFeed";

function HomePage() {
    return (
        <div>
            <h1>HomePage</h1>
            <LeftSideBar />
            <PostFeed />
            <RightSideBar />
        </div>
    );
}

export default HomePage;
