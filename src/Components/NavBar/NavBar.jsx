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
            <ul className="flex justify-evenly items-center text-[1.1rem] font-medium  gap-8 ">
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
            <div className="flex items-center gap-4">
                <NavLink to="/search">
                    <div className="text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000">
                            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                        </svg>
                    </div>
                </NavLink>
                <div >
                    <img width={'40px'} src='/login.png' alt="Login"/>
                </div>

            </div>
        </div>
    )
}
export default NavBar
