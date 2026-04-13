import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import Logo from "../Logo.jsx";
import Menu from "../Menu.jsx";
import ThemeToggle from "../ThemeToggle.jsx";
import {useTheme} from "../../Context/ThemeContext.jsx";

const NavBar = () => {
    const[open,setOpen] = useState(false);
    const theme = useTheme();

    return (
        <div>
            {/*// mobile view*/}
            <div className={'md:hidden lg:hidden  flex items-center justify-between px-4'}>
               <div onClick={()=>setOpen(true)}>
                   <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill={theme.dark?'#FFFFFF':'#00000'}><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>

               </div>
                {
                    open&&
                    <div><Menu theme={theme} setOpen={setOpen}/></div>
                }
                <div>
                    <Logo/>
                </div>
            </div>

            <div
                className="hidden sm:hidden w-full z-20 sticky top-0 bg-white   md:flex md:flex-row md:justify-between md:items-center px-8 dark:bg-neutral-950 dark:border-b-[1px] dark:border-b-neutral-400 ">
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
                                 fill={theme.dark?'#FFFFFF':'#00000'}>
                                <path
                                    d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                            </svg>
                        </div>
                    </NavLink>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill={theme.dark?'#FFFFFF':'#00000'}><path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm160.5-234.5Q343-529 343-587t39.5-97.5Q422-724 480-724t97.5 39.5Q617-645 617-587t-39.5 97.5Q538-450 480-450t-97.5-39.5ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm107.5-76Q640-172 691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140q55 0 107.5-16Zm-52-375.5Q557-553 557-587t-21.5-55.5Q514-664 480-664t-55.5 21.5Q403-621 403-587t21.5 55.5Q446-510 480-510t55.5-21.5ZM480-587Zm0 374Z"/></svg>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default NavBar
