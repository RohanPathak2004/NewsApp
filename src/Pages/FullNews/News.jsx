import React from 'react'
import {useLocation} from "react-router-dom";
import './News.css'
const News = () => {
    const location = useLocation()
    const {topN} = location.state;
    return (
        <div className='news-page'>
            <h1>{topN.title}</h1>
            <div className='news-img'>
                <img src={topN.urlToImage ? topN.urlToImage : "/imgAlt.webp"}/>
            </div>
            <div className='news-details'>
                <span>{topN?.source.name}</span>
                <br/>
                <span>{topN.description ? topN.description : "Description not available for this moment Click on the Red txt Below for redirect"}</span>
                <br/>
                <span>{topN.author}</span>
                <a href={topN.url} target="_blank">
                    CLICK HERE TO READ MORE
                </a>
            </div>

        </div>

    )
}
export default News
