import React from 'react'
import {useLocation} from "react-router-dom";
import './News.css'
const News = () => {
    const location = useLocation()
    const {topN} = location.state;
    return (
        <div className='py-8 flex flex-col gap-1 border-r border-l px-2 border-zinc-300 min-h-screen' >
            <h2 className='text-4xl text-neutral-700 font-medium text-left'>{topN.title}</h2>
            <div className={'w-full h-[600px] bg-clip-padding bg-cover bg-center bg-no-repeat rounded-md'} style={{ backgroundImage: `url(${topN.urlToImage? topN.urlToImage:"imgAlt.webp"})` }}>

            </div>
            <div className='flex flex-col gap-1 text-[1.1rem] text-neutral-700 font-medium'>
                <div className='italic'>{topN?.source.name}</div>
                <div>{topN.description ? topN.description : "Description not available for this moment Click on the Red txt Below for redirect"}</div>
                <div>{topN.author}</div>
                <a className='text-red-500' href={topN.url} target="_blank">
                    CLICK HERE TO READ MORE
                </a>
            </div>

        </div>

    )
}
export default News
