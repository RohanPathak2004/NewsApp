import React, {useContext} from 'react'
import {LiveNewsContext} from '../../Context/LiveNewsContext/LiveNewsContext.jsx';  // Changed import
import HomeLiveNewsComponent from "./HomeComponents/HomeLiveNewsComponent.jsx";
import './Home.css'
import HomeCategoryNews from './HomeComponents/HomeCategoryNews.jsx';
import Loader from '../../Components/Loader/Loader.jsx';

const Home = () => {
    const {loading} = useContext(LiveNewsContext);

    if (loading === undefined) {
        console.error('Loading state is undefined - check context setup');
        return <Loader/>;
    }

    return loading ? (
        <Loader/>
    ) : (
        <div className='home-live'>
            <HomeLiveNewsComponent/>
            <HomeCategoryNews/>
        </div>
    );
};

export default Home;
