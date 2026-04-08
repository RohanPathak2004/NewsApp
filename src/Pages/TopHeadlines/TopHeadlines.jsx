import React, {useContext, useEffect, useState} from 'react'
import {LiveNewsContext} from "../../Context/LiveNewsContext/LiveNewsContext.jsx";
import './TopHeadlines.css'
import {NavLink, useParams} from "react-router-dom";
import Card from "../../Components/card.jsx";

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
        <div className="mt-25">
            <div className="w-full px-1 flex flex-col items-center bg-neutral-100 justify-center ">
                <NavLink to={`/news/${firstChild}`} state={{topN: TopNews[0]}}>

                    <div className='w-[90%] px-4 flex flex-col  items-start gap-1 border border-gray-200 py-4 mt-2 mb-2 hover:shadow hover:shadow-zinc-400 transition ease-out  duration-150 '>
                        <div className="text-2xl font-medium">{TopNews[0]?.title}</div>
                        <div className="w-full  md:h-125 flex justify-start items-center py-2">
                            <img className=' w-full rounded-md h-full ' src={TopNews[0]?.urlToImage ? TopNews[0].urlToImage : "/imgAlt.webp"}/>
                        </div>
                        <div className="first-source-name">{TopNews[0]?.source?.name}</div>
                        <div className="first-time">{new Date(TopNews[0]?.publishedAt).toLocaleDateString()}</div>
                    </div>
                </NavLink>
            </div>
            < ul className="w-full px-1 flex flex-col items-center bg-neutral-100 justify-center ">
                {TopNews.slice(1).map((topN, index) => {
                    const slug = idGenerator(topN?.title);
                    return (

                        <NavLink to={`/news/${slug}`} state={{topN}}>
                            <Card news={topN ? topN : null} id={slug}/>
                        </NavLink>
                    )
                })}
            </ul>
        </div>
    )
}

export default TopHeadlines
