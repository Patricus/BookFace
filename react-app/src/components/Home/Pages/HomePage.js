import React from "react";
import RightSideBar from "../Elements/RightSideBar";
import LeftSideBar from "../Elements/LeftSideBar";
import PostFeed from "../Elements/PostFeed";
import "./home.css";

function HomePage() {
    return (
        <div id="home">
            <LeftSideBar />
            <PostFeed />
            <RightSideBar />
        </div>
    );
}

export default HomePage;
