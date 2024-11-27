import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './accueil/accueil';
import Cadeaux from './cadeaux/cadeaux';
import FilmsNoel from './film-noel/film-noel';
import Footer from './footer/footer';
import Navbar from './navbar/navbar';
import Menu from './menu/menu';
import Header from './header/header';
import CompteRebours from './compte-rebours/compte-rebours';
import ChristmasMusic from './christmas-music/music';
import { AuthProvider } from './auth-provider'; // Importation du AuthProvider

function App() {
  return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/cadeaux" element={<Cadeaux />} />
            <Route path="/film-noel" element={<FilmsNoel />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/" element={<Accueil />} />
            <Route path='/menu' element={<Menu />} />
            <Route path="/compte-rebours" element={<CompteRebours />} />
            <Route path="/music" element={<ChristmasMusic />} />
          </Routes>
          
          <Navbar />
        </div>
      <Footer />
      </Router>
  );
}

export default App;
