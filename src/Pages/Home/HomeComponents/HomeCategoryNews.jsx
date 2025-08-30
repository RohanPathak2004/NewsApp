import React, {useEffect, useState} from 'react'
import './HomeCategoryNews.css'
import {useContext} from 'react';
import {LiveNewsContext} from '../../../Context/LiveNewsContext/LiveNewsContext.jsx';
import {NavLink} from "react-router-dom";

const HomeCategoryNews = () => {
    const {category, categoryNews, idGenerator} = useContext(LiveNewsContext);
    const [News, setNews] = useState([]);
    useEffect(() => {
        if (categoryNews && categoryNews.length > 0) {
            setNews(categoryNews);
        }
    }, [categoryNews])

    return (
        <div className='cat-news-box'>
            <h2>{category[0].toUpperCase() + category.slice(1)} News</h2>
            <ul className='cat-news-list'>
                {
                    News.slice(0, 5).map((item, index) => {
                        const slug = idGenerator(item?.title);
                        return (
                            <NavLink to={`/news/${slug}`} state={{topN: item}}>
                                <li className='card' key={index}>
                                    <div className='img-box'>
                                        <img src={item?.urlToImage ? item.urlToImage : "/imgAlt.webp"}/>
                                    </div>
                                    <div className='card-news-title'>
                                        <span>{item?.title}</span>
                                    </div>

                                </li>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default HomeCategoryNews
