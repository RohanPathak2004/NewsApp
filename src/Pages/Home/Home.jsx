import React from 'react'
import HomeTopHeadLineSection from "./HomeTopHeadLineSection.jsx";
import HomeCategoryNews from './HomeCategoryNews.jsx';

const Home = () => {

    return (
        <div className='w-full py-4 '>
            <HomeTopHeadLineSection/>
            <HomeCategoryNews/>
        </div>
    );
};

export default Home;
