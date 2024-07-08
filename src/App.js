import logo from './logo.svg';
import './App.css';
import Home from './View/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import MainArticle from './View/MainArticle/MainArticle'
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

//Sections//
import Section1 from './View/Sections/Section-1/Section1'
import Section2 from './View/Sections/Section-2/Section2'
import Section3 from './View/Sections/Section-3/Section3'
//Sections//


function App() {
  const navigate = useNavigate()

  const handleBlog = () => {
    navigate(`/`)
  }

  const handleSections = (e) => {
    navigate(`/section-${e.target.id}`)
  }

  return (
    <div className="App">
      <Navbar
        handleBlog={handleBlog}
        handleSections={handleSections}
        navigate={navigate}
      />
      <Routes>
        <Route path='/' element=
          {
            <Home
              handleBlog={handleBlog}
              handleSections={handleSections}
            />
          } />
        <Route path='/section-1' element={<Section1 />} />
        <Route path='/section-2' element={<Section2 />} />
        <Route path='/section-3' element={<Section3 />} />
        <Route path='/main-article' element={<MainArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
