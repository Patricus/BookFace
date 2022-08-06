import React from "react";
import LogoutButton from "../auth/LogoutButton";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Dropdown({ setShowDropdown }) {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    return (
        <div style={{ position: "absolute" }} id="profileDropdown">
            <button
                className="profile-dropdown-button"
                onClick={() => {
                    setShowDropdown(false);
                    history.push(`/profile/${user.id}/`);
                }}>
                Profile
            </button>
            <LogoutButton />
        </div>
    );
}

export default Dropdown;
