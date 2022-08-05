import React from "react";

function Friend({ friend }) {
    return (
        <div>
            <h4>{`${friend.first_name} ${friend.last_name}`}</h4>
        </div>
    );
}

export default Friend;
