import React, {useContext, useEffect, useState} from 'react'
import LiveNewsContextProvider, {LiveNewsContext} from '../../Context/LiveNewsContext/LiveNewsContext';
import './NewsByCategory.css'
import Loader from "../../Components/Loader/Loader.jsx";
import {NavLink} from "react-router-dom";

const NewsByCategory = () => {
    const {category, idGenerator, setCategory, categoryNews, setLoading, loading} = useContext(LiveNewsContext)

    const handleCatClick = (category) => {

        setCategory(category)
        setSelected(true)
    }
    console.log(categoryNews, "from context");


    return (
        <div>
            <div className="category-news">
                <h1>Search News By Categories</h1>
                <div className="category-btns-container">
                    <div className="category-btns one">
                        <button onClick={() => handleCatClick("business")}>Business</button>
                        <button onClick={() => handleCatClick("entertainment")}>Entertainment</button>
                        <button onClick={() => handleCatClick("health")}>Health</button>
                    </div>
                    <div className="category-btns two">
                        <button onClick={() => handleCatClick("sports")}>Sports</button>
                        <button onClick={() => handleCatClick("technology")}>Technology</button>
                    </div>
                    <div className="category-btns three">
                        <button onClick={() => handleCatClick("science")}>Science</button>
                        <button onClick={() => handleCatClick("general")}>General</button>

                    </div>
                </div>
            </div>
            {
                categoryNews ? <div>
                        {loading ? <Loader/> :
                            <div className="category-news-list">
                                < ul className="second-section">
                                    {categoryNews.slice(1).map((topN, index) => {
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
                            </div>}
                    </div> :
                    <h1 style={{color: "red", textAlign: "center"}}>Pls select category for the news</h1>
            }
        </div>
    )
}

export default NewsByCategory
