import React from "react";
import LogoutButton from "../auth/LogoutButton";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Dropdown() {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    return (
        <div className="dropdown">
            <div>
                <LogoutButton />
                <button className="dropdown" onClick={() => history.push(`/profile/${user.id}/`)}>
                    Profile
                </button>
            </div>
        </div>
    );
}

export default Dropdown;
