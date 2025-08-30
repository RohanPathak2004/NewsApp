import React from 'react'
import './NavBar.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="NavBar-left">
                <NavLink to="/">
                    <h1>NEWS</h1>
                </NavLink>
            </div>
            <ul className="NavBar-center">
                <NavLink to="/">
                    <li className="last">Home</li>
                </NavLink>
                <NavLink to="/top">
                    <li>Top Headlines</li>
                </NavLink>
                <NavLink to="/category">
                    <li>News By Categories</li>
                </NavLink>
            </ul>
            <div className="NavBar-right">
                <NavLink to="/search">
                    <div className="Search-logo">🔍</div>
                </NavLink>
                <div className="login-logo">
                    <img src='/login.png' alt="Login"/>
                </div>

            </div>
        </div>
    )
}
export default NavBar
