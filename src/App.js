import logo from './logo.svg';
import './App.css';
import Home from './View/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section'
import { Route, Routes } from 'react-router-dom';
import Post from './Components/Post/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/section/:id' Component={Section} />
        <Route path='/post/:id' Component={Post}/>
      </Routes>
    </div>
  );
}

export default App;
