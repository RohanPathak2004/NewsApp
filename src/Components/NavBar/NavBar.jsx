import React, {useState} from 'react'

import {NavLink} from "react-router-dom";
import Logo from "../Logo.jsx";
import Menu from "../Menu.jsx";
import ThemeToggle from "../ThemeToggle.jsx";

const NavBar = () => {
    const[open,setOpen] = useState(false);
    return (
        <div>
            {/*// mobile view*/}
            <div className={'md:hidden lg:hidden  flex items-center justify-between px-4'}>
               <div onClick={()=>setOpen(true)}>
                   <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#999999"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>

               </div>
                {
                    open&&
                    <div><Menu setOpen={setOpen}/></div>
                }
                <div>
                    <Logo/>
                </div>
            </div>

            <div
                className="hidden sm:hidden w-full z-20 sticky top-0 bg-white   md:flex md:flex-row md:justify-between md:items-center px-8 dark:bg-slate-950 dark:text-white">
                <Logo/>
                <ul className="flex justify-evenly items-center text-[1.1rem] font-medium  gap-8 ">
                    <NavLink to="/">
                        <li className=" text-zinc-600 hover:text-zinc-900 dark:text-white dark:hover:text-slate-100 transition-all">Home</li>
                    </NavLink>
                    <NavLink to="/top">
                        <li className="text-zinc-600 hover:text-zinc-900 dark:text-white dark:hover:text-slate-100 transition-all">Top Headlines</li>
                    </NavLink>
                    <NavLink to="/category">
                        <li className='text-zinc-600 hover:text-zinc-900 dark:text-white dark:hover:text-slate-100 transition-all'>News By Categories</li>
                    </NavLink>
                </ul>
                <div className="flex items-center gap-4">
                    <div>
                        <ThemeToggle/>
                    </div>
                    <NavLink to="/search">
                        <div className="text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                                 fill="#000000">
                                <path
                                    d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                            </svg>
                        </div>
                    </NavLink>
                    <div>
                        <img width={'40px'} src='/login.png' alt="Login"/>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default NavBar
