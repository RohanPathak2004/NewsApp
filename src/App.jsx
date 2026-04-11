import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'

import NavBar from "./Components/NavBar/NavBar.jsx";
import News from "./Pages/FullNews/News.jsx";
import Search from "./Pages/SearchNews/Search.jsx";
import TopHeadlines from './Pages/TopHeadlines/TopHeadlines.jsx';
import NewsByCategory from './Pages/NewsByCategory/NewsByCategory.jsx';
import LiveNewsContextProvider from './Context/LiveNewsContext/LiveNewsContext.jsx';
import Container from "./Components/Container.jsx";
import Footer from "./Components/Footer.jsx";

function App() {

    return (
        <div className=' h-screen'>
            <NavBar/>
            <LiveNewsContextProvider>
                <Container>


                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/top" element={<TopHeadlines/>}/>
                        <Route path="/category" element={<NewsByCategory/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/news/:newsID" element={<News/>}/>
                    </Routes>


                </Container>
                {/*<Footer/>*/}
            </LiveNewsContextProvider>
        </div>
    )
}

export default App
