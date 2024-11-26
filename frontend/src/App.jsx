import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './accueil/accueil.jsx';
import Cadeaux from './cadeaux/cadeaux.jsx';
import FilmsNoel from './filmNoel/film-noel.jsx';
import Footer from './footer/footer.jsx';
import { AuthProvider, AuthContext } from './header/AuthContext.jsx';
import Navbar from './navBar/navbar';
import Menu from './menu/menu';
import Header from './header/header.jsx';
import CompteRebours from './compte-rebours/compte-rebours.jsx';
import ChristmasMusic from '../christmas-music/music';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/cadeaux" element={<Cadeaux />} />
            <Route path="/filmNoel" element={<FilmsNoel />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/" element={<Accueil />} />
            <Route path='/menu' element={<Menu />} />
            <Route path="/compteRebours" element={<CompteRebours />} />
            <Route path="/music" element={<ChristmasMusic />} />
          </Routes>
          
          <Navbar />
        </div>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;

