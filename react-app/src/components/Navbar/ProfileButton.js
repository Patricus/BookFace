import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

function ProfileButton() {
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const clickCheck = e => {
            if (e.target.id === "profile-button") return;
            if (!e.target.classList.contains("dropdown")) setShowDropdown(false);
        };
        console.log("showDropdown", showDropdown);
        document.addEventListener("mousedown", clickCheck);
        return () => document.removeEventListener("mousedown", clickCheck);
    }, [showDropdown]);

    return (
        <>
            <button
                id="profile-button"
                onClick={() => {
                    setShowDropdown(!showDropdown);
                }}>
                Profile
            </button>
            <Dropdown />
        </>
    );
}

export default ProfileButton;
