import React, {useContext, useEffect, useState} from 'react'
import {LiveNewsContext} from "../../Context/LiveNewsContext/LiveNewsContext.jsx";
import './TopHeadlines.css'
import {NavLink, useParams} from "react-router-dom";

const TopHeadlines = () => {
    const {newsID} = useParams();
    const {news, idGenerator} = useContext(LiveNewsContext);
    const [TopNews, setTopNews] = useState([]);
    useEffect(() => {
        if (news && news.length > 0) {
            setTopNews(news);
        }
    }, [news])

    const firstChild = idGenerator(TopNews[0]?.title);
    return (
        <div className="top-headlines">
            <div className="first-section">
                <NavLink to={`/news/${firstChild}`} state={{topN: TopNews[0]}}>
                    <div className="first-title">{TopNews[0]?.title}</div>
                    <div className="first-source-name">{TopNews[0]?.source?.name}</div>
                    <div className="first-time">{new Date(TopNews[0]?.publishedAt).toLocaleDateString()}</div>
                    <div className="first-img">
                        <img src={TopNews[0]?.urlToImage ? TopNews[0].urlToImage : "/imgAlt.webp"}/>
                    </div>
                </NavLink>
            </div>
            < ul className="second-section">
                {TopNews.slice(1).map((topN, index) => {
                    const slug = idGenerator(topN?.title);
                    return (

                        <NavLink to={`/news/${slug}`} state={{topN}}>
                            <li key={index}>
                                <div className="list-details">
                                    <div className='list-title'>{topN?.title}</div>
                                    <div className='list-source'>Source: {topN?.source.name}</div>
                                    <div className='list-time'>
                                        <span>published: {(new Date(topN?.publishedAt)).toLocaleDateString()}</span>
                                        <br/>
                                        <span style={{color: "red"}}>read more</span>
                                    </div>
                                </div>
                                <div className="list-img">
                                    <img src={topN?.urlToImage ? topN.urlToImage : "/imgAlt.webp"}/>
                                </div>
                            </li>
                        </NavLink>
                    )
                })}
            </ul>
        </div>
    )
}

export default TopHeadlines
