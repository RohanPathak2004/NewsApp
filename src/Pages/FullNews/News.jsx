import React from 'react'
import {useLocation} from "react-router-dom";
const News = () => {
    const location = useLocation()
    const {topN} = location.state;
    return (
        <div className='py-8 flex flex-col gap-1 border-r border-l dark:border-r-neutral-500 dark:border-l-neutral-500 px-2 border-zinc-300 min-h-screen dark:bg-neutral-900 ' >
            <h2 className='text-5xl text-neutral-700 font-medium text-left dark:text-white'>{topN.title}</h2>
            <div className={'w-full h-150 bg-clip-padding bg-cover bg-center bg-no-repeat rounded-md'} style={{ backgroundImage: `url(${topN.urlToImage? topN.urlToImage:"imgAlt.webp"})` }}>

            </div>
            <div className='flex flex-col gap-1 text-[1.1rem] text-neutral-700 font-medium'>
                <div className='italic dark:text-white'>{topN?.source.name}</div>
                <div className='dark:text-white'>{topN.description ? topN.description : "Description not available for this moment Click on the Red txt Below for redirect"}</div>
                <div className='dark:text-white'>{topN.author}</div>
                <a className='text-red-500' href={topN.url} target="_blank">
                    CLICK HERE TO READ MORE
                </a>
            </div>

        </div>

    )
}
export default News
