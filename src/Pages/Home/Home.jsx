import React, {useContext} from 'react'
import HomeTopHeadLineSection from "./HomeTopHeadLineSection.jsx";
import HomeCategoryNews from './HomeCategoryNews.jsx';

const Home = () => {
    // const {loading} = useContext(LiveNewsContext);

    // if (loading === undefined) {
    //     console.error('Loading state is undefined - check context setup');
    //     return <Loader/>;
    // }

    return (
        <div className='w-full h-screen py-4'>
            <HomeTopHeadLineSection/>
            <HomeCategoryNews/>
        </div>
    );
};

export default Home;
