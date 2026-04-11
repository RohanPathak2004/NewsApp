import React, {useContext} from 'react'
import {LiveNewsContext} from "../../Context/LiveNewsContext/LiveNewsContext.jsx";
import './TopHeadlines.css'
import {NavLink} from "react-router-dom";
import Card from "../../Components/card.jsx";

const TopHeadlines = () => {
    const {news} = useContext(LiveNewsContext);
    // console.log(idGenerator("Rohan Pathak"));
    function idGenerator(title) {
        return title.replaceAll(" ", "_")
    }
    return (
        <div className="mt-25 flex flex-col gap-2 h-full">
            {
                news.map((news, idx) => {
                    const slug = idGenerator(news.title);
                        return (

                            <NavLink id={idx} to={`/news/${slug}`} state={{topN: news}}>
                                <Card news={news}/>
                            </NavLink>
                        )
                    }
                )
            }
        </div>
    )
}

export default TopHeadlines
