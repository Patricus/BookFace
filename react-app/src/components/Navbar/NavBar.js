import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";

const NavBar = () => {
    const user = useSelector(state => state.session.user);

    return (
        <>
            {user && (
                <nav>
                    <div>
                        <div>
                            <NavLink to="/" exact={true} activeClassName="active">
                                logo
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <div>
                            <NavLink to="/" exact={true} activeClassName="active">
                                Home
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/friends" exact={true} activeClassName="active">
                                Friends
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <div>
                            <NavLink to="/about" exact={true} activeClassName="active">
                                About Me
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <div>
                            <ProfileButton />
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
};

export default NavBar;
