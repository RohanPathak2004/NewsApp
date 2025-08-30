
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'

import NavBar from "./Components/NavBar/NavBar.jsx";
import News from "./Pages/FullNews/News.jsx";
import Search from "./Pages/SearchNews/Search.jsx";
import TopHeadlines from './Pages/TopHeadlines/TopHeadlines.jsx';
import NewsByCategory from './Pages/NewsByCategory/NewsByCategory.jsx';
import LiveNewsContextProvider from './Context/LiveNewsContext/LiveNewsContext.jsx';
function App() {

  return (
    
    <LiveNewsContextProvider>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/top" element={<TopHeadlines/>}/>
      <Route path="/category" element={<NewsByCategory/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/news/:newsID" element={<News/>}/>
    </Routes>
    
    </LiveNewsContextProvider>
    
  )
}

export default App
