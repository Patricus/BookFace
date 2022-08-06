import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";

function MenuButton() {
    const [showDropdown, setShowDropdown] = useState(false);

    const user = useSelector(state => state.session.user);

    useEffect(() => {
        const clickCheck = e => {
            if (e.target.id === "user-menu-pic") return;
            if (!e.target.classList.contains("profileDropdown")) setShowDropdown(false);
        };
        document.addEventListener("mousedown", clickCheck);
        return () => document.removeEventListener("mousedown", clickCheck);
    }, [showDropdown]);

    return (
        <div style={{ position: "relative" }}>
            {user && (
                <button
                    id="user-menu-button"
                    onClick={() => {
                        setShowDropdown(!showDropdown);
                    }}>
                    <img id="user-menu-pic" src={user.profile_pic} alt="User Menu" />
                </button>
            )}
            {showDropdown && <Dropdown />}
        </div>
    );
}

export default MenuButton;
