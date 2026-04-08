import React from 'react'

const Card = ({news}) => {
    if(news==null) return null
    return (
        <div className='min-w-[90%] px-4 flex flex-col  items-start gap-1 border border-gray-200 py-4 mt-2 mb-2 hover:shadow hover:shadow-zinc-400 transition ease-out  duration-150 '>
            <div className="text-2xl font-medium">{news?.title}</div>
            <div className="w-full  md:h-125 flex justify-start items-center py-2">
                <img className=' w-full rounded-md h-full ' src={news?.urlToImage ? news.urlToImage : "/imgAlt.webp"}/>
            </div>
            <div className="first-source-name">{news?.source?.name}</div>
            <div className="first-time">{new Date(news?.publishedAt).toLocaleDateString()}</div>
        </div>
    )
}
export default Card
