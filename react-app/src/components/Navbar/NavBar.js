import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import MenuButton from "./MenuButton";
import B from "./images/B.png";
import house from "./images/house.png";
import houseSelected from "./images/house-selected.png";
import people from "./images/people.png";
import peopleSelected from "./images/people-selected.png";
import block from "./images/block.png";
import blockSelected from "./images/block-selected.png";
import "./navbar.css";

const NavBar = () => {
    const user = useSelector(state => state.session.user);

    return (
        <>
            {user && (
                <nav id="navbar">
                    <div>
                        <Link to="/" exact={true}>
                            <div id="logo">
                                <img src={B} alt="Logo" />
                            </div>
                        </Link>
                    </div>
                    <div id="nav-buttons">
                        <NavLink
                            to="/"
                            exact={true}
                            id="home-link"
                            className="navlink"
                            activeClassName="activeNav">
                            <div className="nav-button"></div>
                        </NavLink>
                        <NavLink
                            to="/friends"
                            id="friend-link"
                            className="navlink"
                            activeClassName="activeNav">
                            <div className="nav-button"></div>
                        </NavLink>
                        <div className="nav-button empty-nav"></div>
                        <div className="nav-button empty-nav"></div>
                        <NavLink
                            to="/contact"
                            exact={true}
                            id="contact-link"
                            className="navlink"
                            activeClassName="activeNav">
                            <div className="nav-button"></div>
                        </NavLink>
                    </div>
                    <div id="menu-button">
                        <MenuButton />
                    </div>
                </nav>
            )}
        </>
    );
};

export default NavBar;
