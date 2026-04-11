import React, {useContext, useEffect, useState} from 'react'
import './Search.css'
import {NavLink} from "react-router-dom";
import {LiveNewsContext} from "../../Context/LiveNewsContext/LiveNewsContext.jsx";
import Card from "../../Components/card.jsx";
import Loader from "../../Components/Loader/Loader.jsx";

const Search = () => {
    const {
        setSearchValue,
        displayValue,
        setDisplayValue,
        idGenerator,
        searchedNews,
        loading
    } = useContext(LiveNewsContext)
    const handleSearch = () => {
        setSearchValue(displayValue);
    }
    return (
        <div className={'py-8'}>
            <div >
                <label htmlFor={'search'} className='w-full flex justify-center items-center gap-1'>
                    <input id="inputValue"
                           type="text"
                           value={displayValue}
                           onChange={e => setDisplayValue(e.target.value)}
                           placeholder="Search..."
                           onKeyDown={(e)=>{e.key==='Enter'?handleSearch():null}}
                           className='w-[50%] px-4 py-2 border border-neutral-500 focus:ring-neutral-500'/>
                    <button className='bg-red-600 px-4 py-2 rounded-md text-white font-medium'
                            onClick={handleSearch}>Search

                    </button>
                </label>
            </div>
            {
                searchedNews && searchedNews.length===0?<h2>No relevent result found...</h2>:null
            }
            <div className='py-8 min-h-screen'>
                {loading ? <Loader/> : searchedNews?.slice(0, 10).map((topN, index) => {
                    const slug = idGenerator(topN?.title);
                    return (

                        <NavLink className={'flex flex-col gap-2'} id={index} to={`/news/${slug}`} state={{topN}}>
                            <Card news={topN}/>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}
export default Search