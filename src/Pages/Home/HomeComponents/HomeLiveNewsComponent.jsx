import React, {useContext, useEffect, useState} from 'react'
import {LiveNewsContext} from "../../../Context/LiveNewsContext/LiveNewsContext.jsx";
// import './HomeLiveNewsComponent.css'
import Loader from '../../../Components/Loader/Loader.jsx';
import {NavLink} from "react-router-dom";
import News from "../../FullNews/News.jsx";

const HomeLiveNewsComponent = () => {
    const {news, idGenerator} = useContext(LiveNewsContext);



    // console.log(News)
    return (
        <div className='w-full py-4 '>
            <h2 className='text-4xl font-medium'>Top Headlines</h2>
            <div className='w-full flex flex-col mt-5 gap-1 md:flex-row md:justify-between md:items-center md:gap-4'>
                <NavLink to={`/news/${idGenerator(news[0]?.title)}`} state={{topN: news[0]}}>

                    <div className='news-img-title px-2 '>
                        <img
                            className='rounded-lg'
                            src={news[0]?.urlToImage || "/imgAlt.webp"}
                            alt={news[0]?.title || "News image"}
                        />
                        <h2 className='text-xl mt-2 mb-2'>{news[0]?.title || "News Title"}</h2>
                    </div>
                </NavLink>
                <ul className='w-full mt-5 px-2 md:w-1/2 flex flex-col gap-3 items-start'>
                    {news.slice(1, 5).map((item, index) => {
                        const slug = idGenerator(item?.title);
                        return (
                            <NavLink to={`/news/${slug}`} state={{topN: item}}>
                                <li className='flex flex-wrap' key={index}>
                                    <button className=' text-sm px-3 py-1 bg-red-600 text-white animate-pulse rounded-md '>Live</button>
                                    <div>{item?.title || "News Title"}</div>
                                </li>
                            </NavLink>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}
export default HomeLiveNewsComponent
