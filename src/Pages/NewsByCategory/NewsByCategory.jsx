import React, {useContext,useState} from 'react'
import  {LiveNewsContext} from '../../Context/LiveNewsContext/LiveNewsContext';
import './NewsByCategory.css'
import Loader from "../../Components/Loader/Loader.jsx";
import {NavLink} from "react-router-dom";
import Card from "../../Components/card.jsx";

const NewsByCategory = () => {
    const {idGenerator, setCategory, categoryNews} = useContext(LiveNewsContext)
    const [selectedChild, setSelectedChild] = useState(0);
    const handleCategorySelection = (category, idx) => {
        setSelectedChild(idx);
        setCategory(category)
    }
    console.log(categoryNews, "from context");
    const categories = ['business', 'entertainment', 'health', 'sports', 'technology', 'science', 'general'];

    return (
        <div>
            <div>
                <h2 className='font-medium text-2xl'>News By Categories</h2>
                <div className={`flex flex-wrap justify-center gap-4 mt-2 mb-2 `}>
                    {
                        categories.map((item, idx) => (
                            <button
                                className={`rounded-md  border border-neutral-300 px-4 py-2 text-neutral-700 transition-colors   ${selectedChild === idx ? 'bg-red-600 text-white' : null}`}
                                key={idx}
                                onClick={() => handleCategorySelection(item, idx)}>{item.charAt(0).toUpperCase() + item.slice(1)}</button>
                        ))
                    }

                </div>
            </div>
            <div className={'py-8'}>
            {
                categoryNews ?
                    categoryNews.map((news, idx) => {
                            const slug = idGenerator(news.title);
                            return (

                                <NavLink id={idx} to={`/news/${slug}`} state={{topN: news}}>
                                    <Card news={news}/>
                                </NavLink>
                            )
                        }
                    ) : <Loader/>
            }
            </div>
        </div>
    )
}

export default NewsByCategory
