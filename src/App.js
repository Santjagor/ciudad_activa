import logo from './logo.svg';
import './App.css';
import Home from './View/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Post from './Components/Post/Post';
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const handleBlog = (e) => {
    navigate(`/post/${e.target.id}`)
  }

  const handleSections = (e) => {
    navigate(`/section/${e.target.id}`)
  }

  return (
    <div className="App">
      <Navbar
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
        <Route path='/section/:id' element={<Section />} />
        <Route path='/post/:id' element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
