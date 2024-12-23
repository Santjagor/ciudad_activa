import './App.css';
import Home from './View/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NavbarMobile from './Components/NavbarMobile/NavbarMobile';
import Footer from './Components/Footer/Footer'
import MainArticle from './View/MainArticle/MainArticle'
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

//Sections//
import Section1 from './View/Sections/Section-1/Section1'
import Section2 from './View/Sections/Section-2/Section2'
import Section3 from './View/Sections/Section-3/Section3'
import Section4 from './View/Sections/Section-4/Section4'
import Section5 from './View/Sections/Section-5/Section5'
import Dpa_1 from './View/Sections/dpa/Dpa_1'
import Dpa_2 from './View/Sections/dpa/Dpa_2'
import Dpa_3 from './View/Sections/dpa/Dpa_3'
import Dpa_4 from './View/Sections/dpa/Dpa_4'
import Nmplm_1 from './View/Sections/nmplm/Nmplm_1'
import Nmplm_2 from './View/Sections/nmplm/Nmplm_2'
import SideMenu from './Components/SideMenu/SideMenu';
//Sections//


function App() {
  const navigate = useNavigate()
  const [sideMenu, setSideMenu] = useState(false)
  const handleBlog = () => {
    navigate(`/`)
    setSideMenu(false)
  }

  const toggleSideMenu = () => {
    setSideMenu(!sideMenu)
  }

  const handleSections = (e) => {
    navigate(`/${e.target.id}`)
    setSideMenu(false)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="App">
      <Navbar
        handleBlog={handleBlog}
        handleSections={handleSections}
        navigate={navigate}
      />
      <NavbarMobile
        toggleSideMenu={toggleSideMenu}
        sideMenu={sideMenu}
        setSideMenu={setSideMenu}
        navigate={navigate}
      />
      {
        sideMenu
        &&
        <SideMenu
          handleBlog={handleBlog}
          handleSections={handleSections}
        />
      }
      <Routes>
        <Route path='/' element=
          {
            <Home
              handleBlog={handleBlog}
              handleSections={handleSections}
            />
          } />
        <Route path='/transporte-publico' element={<Section1 />} />
        <Route path='/foros-de-seguridad' element={<Section2 />} />
        <Route path='/fondo-urbano' element={<Section3 />} />
        <Route path='/gobierno-abierto' element={<Section4 />} />
        <Route path='/dialogos-para-activar' element={<Section5 />} />

        <Route path='/dialogos-para-activar-1' element={<Dpa_1 handleSections={handleSections} />} />
        <Route path='/dialogos-para-activar-2' element={<Dpa_2 handleSections={handleSections} />} />
        <Route path='/dialogos-para-activar-3' element={<Dpa_3 handleSections={handleSections} />} />
        <Route path='/dialogos-para-activar-4' element={<Dpa_4 handleSections={handleSections} />} />

        <Route path='/nuevas-melodias-para-la-militancia-1' element={<Nmplm_1 handleSections={handleSections} />} />
        <Route path='/nuevas-melodias-para-la-militancia-2' element={<Nmplm_2 handleSections={handleSections} />} />

        <Route path='/ciudad-que-late' element={<MainArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
