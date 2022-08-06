import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

function MenuButton() {
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const clickCheck = e => {
            if (e.target.id === "user-menu-button") return;
            if (!e.target.classList.contains("dropdown")) setShowDropdown(false);
        };
        document.addEventListener("mousedown", clickCheck);
        return () => document.removeEventListener("mousedown", clickCheck);
    }, [showDropdown]);

    return (
        <>
            <button
                id="user-menu-button"
                onClick={() => {
                    setShowDropdown(!showDropdown);
                }}>
                User Menu
            </button>
            {showDropdown && <Dropdown />}
        </>
    );
}

export default MenuButton;
