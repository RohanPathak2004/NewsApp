import React, {useContext, useEffect, useState} from 'react'
import {LiveNewsContext} from "../../../Context/LiveNewsContext/LiveNewsContext.jsx";
import './HomeLiveNewsComponent.css'
import Loader from '../../../Components/Loader/Loader.jsx';
import {NavLink} from "react-router-dom";

const HomeLiveNewsComponent = () => {
    const {news, idGenerator} = useContext(LiveNewsContext);
    const [News, setNews] = useState([]);
    useEffect(() => {
        if (news && news.length > 0) {
            setNews(news);
        }
    }, [news]);


    console.log(News)
    return (
        <div className='live-news-section'>
            <h2>Top Headlines</h2>
            <div className='live-news-box'>
                <NavLink to={`/news/${idGenerator(News[0]?.title)}`} state={{topN: News[0]}}>
                    <div className='news-img-title'>
                        <img
                            src={News[0]?.urlToImage || "/imgAlt.webp"}
                            alt={News[0]?.title || "News image"}
                        />
                        <h4>{News[0]?.title || "News Title"}</h4>
                    </div>
                </NavLink>
                <ul className='news-list'>
                    {News.slice(1, 5).map((item, index) => {
                        const slug = idGenerator(item?.title);
                        return (
                            <NavLink to={`/news/${slug}`} state={{topN: item}}>
                                <li key={index}>
                                    <button>Live</button>
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
