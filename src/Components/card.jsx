import React from 'react'

const Card = ({news}) => {
    if (news == null) return null
    return (
        <div
            className='min-w-[90%] px-4 flex flex-col  md:flex-row  items-start gap-1 border border-gray-200 py-4 mt-2 mb-2 hover:shadow hover:shadow-zinc-400 transition ease-out  duration-150 '>
            <div className='w-full flex flex-col gap-2 justify-center'>
                <div className="text-2xl font-medium">{news?.title}</div>
                <div className="first-source-name italic">{news?.source?.name}</div>
                <div className="first-time">{new Date(news?.publishedAt).toLocaleDateString()}</div>
                <div className={'font-bold text-red-600'}>Read more</div>
            </div>
            <div className={'w-full  md:w-[20%] h-37.5 bg-cover bg-center bg-no-repeat rounded-md'} style={{ backgroundImage: `url(${news.urlToImage? news.urlToImage:"imgAlt.webp"})` }}>

            </div>
        </div>
    )
}
export default Card
