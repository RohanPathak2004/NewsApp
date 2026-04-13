import React from 'react'
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className="text-2xl font-bold text-red-600 ">
            <NavLink to="/">
                <h1>NEWS</h1>
            </NavLink>
        </div>
    )
}
export default Logo
