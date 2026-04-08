import React from 'react'

import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="w-full z-50 sticky top-0 bg-white px-4 flex flex-col gap-1 md:flex md:flex-row md:justify-between md:items-center px-8 ">
            <div className="text-xl font-bold text-red-600 ">
                <NavLink to="/">
                    <h1>NEWS</h1>
                </NavLink>
            </div>
            <ul className="flex justify-evenly items-center text-[1.1rem] font-medium  gap-4 ">
                <NavLink to="/">
                    <li className=" text-zinc-600 hover:text-zinc-900 transition-all">Home</li>
                </NavLink>
                <NavLink to="/top">
                    <li className="text-zinc-600 hover:text-zinc-900 transition-all">Top Headlines</li>
                </NavLink>
                <NavLink to="/category">
                    <li className='text-zinc-600 hover:text-zinc-900 transition-all'>News By Categories</li>
                </NavLink>
            </ul>
            <div className="flex items-center gap-2">
                <NavLink to="/search">
                    <div className="text-2xl">🔍</div>
                </NavLink>
                <div >
                    <img width={'40px'} src='/login.png' alt="Login"/>
                </div>

            </div>
        </div>
    )
}
export default NavBar
