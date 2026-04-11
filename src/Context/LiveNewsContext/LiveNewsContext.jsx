import React, {createContext, useContext, useEffect, useState} from "react";
import HomeTopHeadLineSection from "../../Pages/Home/HomeTopHeadLineSection.jsx";
import PropTypes from 'prop-types';

export const LiveNewsContext = createContext({});
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const LiveNewsContextProvider = ({children}) => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("business");
    const [categoryNews, setCategoryNews] = useState([])
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("Global");
    const [displayValue, setDisplayValue] = useState("");
    const [searchedNews, setSearchedNews] = useState([]);

    function idGenerator(title) {
        return title?.replaceAll(" ", "_")
    }

    const fetchNews = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://newsapi.org/v2/top-headlines?category=general&apiKey=${API_KEY}`);
            const data = await response.json();
            setNews(data.articles);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    const fetchSearchedNews = async (searchValue) => {
        try {
            // Instead of hardcoded future date:
            setLoading(true);
            const today = new Date();
            const fromDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // 30 days ago
            const fromDateString = fromDate.toISOString().split('T')[0];
            const response = await fetch(`https://newsapi.org/v2/everything?q=${searchValue}&from=${fromDateString}&sortBy=popularity&apiKey=${API_KEY}`);
            const data = await response.json();
            console.log(data.articles)
            setSearchedNews(data.articles);
        } catch (error) {
            console.log(error)
        }finally {
            setLoading(false)
        }
    }
    const fetchCategoryNews = async (category) => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
            const data = await response.json();
            setCategoryNews(data.articles);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchNews();

    }, [])
    useEffect(() => {
        fetchCategoryNews(category);
    }, [category])
    useEffect(() => {
        if (searchValue) {
            fetchSearchedNews(searchValue);
        }
    }, [searchValue])
    const contextValue = {
        news,
        categoryNews,
        category,
        idGenerator,
        setCategory,
        setLoading,
        searchValue,
        setSearchValue,
        displayValue,
        setDisplayValue,
        searchedNews,
        loading
    }
    return (
        <LiveNewsContext.Provider value={contextValue}>
            {children}
        </LiveNewsContext.Provider>
    )
}
LiveNewsContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
    Category: PropTypes.string
}
export default LiveNewsContextProvider