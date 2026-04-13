import React, {useEffect, useState} from 'react'
import {useContext} from 'react';
import {LiveNewsContext} from '../../Context/LiveNewsContext/LiveNewsContext.jsx';
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
        <div className='w-full mt-5 flex flex-col items-start gap-2 dark:text-white '>
            <h2 className='font-medium text-neutral-800 text-4xl mb-2 dark:text-white'>{category[0].toUpperCase() + category.slice(1)} News</h2>
            <ul className='flex flex-col  gap-4 md:flex-row md:flex-wrap md:gap-6 px-4 py-8 dark:bg-neutral-900 dark:text-white rounded-md'>
                {
                    News.slice(0, 5).map((item, index) => {
                        const slug = idGenerator(item?.title);
                        return (
                            <NavLink to={`/news/${slug}`} state={{topN: item}}>
                                <li className='flex flex-col items-start justify-center md:w-50 rounded-md md:flex-col md:justify-start md:gap-2 border border-zinc-300 px-2   h-full  ' key={index}>
                                    <div
                                        className="mt-2 h-55 w-full bg-cover rounded-md bg-no-repeat px-2  bg-clip-border bg-center "
                                        style={{ backgroundImage: `url(${item.urlToImage? item.urlToImage:"imgAlt.webp"})` }}
                                    >
                                    </div>
                                    <div className='text-sm text-neutral-700 flex flex-col items-center justify-center dark:text-white py-2'>
                                        <span className={''}>{item?.title}</span>
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
