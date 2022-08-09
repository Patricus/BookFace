import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SentRequests from "./SentRequests";

function RequestSideBar(requests) {
    const [showSentRequests, setShowSentRequests] = useState(false);

    return (
        <div className="friend-sidebar">
            <h2>Requests</h2>
            <NavLink to="/friends">All Users</NavLink>
            {showSentRequests && (
                <SentRequests requests={requests.sent} setShowSentRequests={setShowSentRequests} />
            )}
            <div>
                <button onClick={() => setShowSentRequests(true)}>Sent Requests</button>
            </div>
        </div>
    );
}

export default RequestSideBar;
