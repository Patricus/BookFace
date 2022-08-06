import React from "react";
import Requests from "../Elements/Requests/Requests";
import RequestSideBar from "../Elements/Requests/RequestSideBar";

function RequestsPage() {
    return (
        <div className="friend-page">
            <div>
                <RequestSideBar />
            </div>
            <div>
                <Requests />
            </div>
        </div>
    );
}

export default RequestsPage;
