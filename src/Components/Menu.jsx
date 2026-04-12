import React from 'react'
import {NavLink} from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const Menu = ({setOpen}) => {
    const routes = [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/top',
            name: 'Top Headlines'
        },
        {
            path: '/category',
            name: 'News By Category',
        },
        {
            path: '/search',
            name: 'Search News',
        }
    ]
    return (
        <div className={'absolute top-0 inset-0 bg-white h-70 flex flex-col items-starts px-2 py-2  '}>

            <div  onClick={()=>setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
            </div>
            <div className={'flex flex-col items-center text-[1.2rem] gap-4'}>
                {routes.map(route=>(
                    <NavLink onClick={()=>setOpen(false)} to={route.path}>
                        <div>
                            {route.name}
                        </div>
                    </NavLink>
                ))}
                <div>
                    <ThemeToggle/>
                </div>
            </div>

        </div>
    )
}
export default Menu
