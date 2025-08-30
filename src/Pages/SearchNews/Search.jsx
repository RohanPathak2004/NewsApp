import React, {useContext, useEffect, useState} from 'react'
import './Search.css'
import {NavLink} from "react-router-dom";
import {LiveNewsContext} from "../../Context/LiveNewsContext/LiveNewsContext.jsx";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const Search = () => {
    const {
        searchValue,
        setSearchValue,
        displayValue,
        setDisplayValue,
        idGenerator,
        searchedNews
    } = useContext(LiveNewsContext)
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleSearch = () => {
        setSearchValue(displayValue);
    }
    useEffect(() => {
        if (searchedNews && searchedNews.length > 0) {
            setNews(searchedNews);
            setLoading(false);
        }
    }, [searchedNews])
    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div className='search-news-section'>
            <div className="search-news-box">
                <label>
                    <input id="inputValue"
                           type="text"
                           value={displayValue}
                           onChange={e => setDisplayValue(e.target.value)}
                           placeholder="Search..."/>
                    <button onClick={handleSearch}>Search</button>
                </label>
            </div>
            <div>
                Searched for:{displayValue !== "" && searchValue ? searchValue : null}
            </div>
            <div className="category-news-list">
                < ul className="second-section">
                    {news.slice(0, 16).map((topN, index) => {
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
        </div>
    )
}
export default Search