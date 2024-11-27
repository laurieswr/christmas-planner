import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../images/home.jpg';
import CadeauxIcon from '../images/gift-box-icon-png-7.jpg';
import './Navbar.css';
import MenuNoel from '../menu/menu';
import ImgNoel from '../images/menuChristmas.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/accueil" className="navbar-icon">
        <img src={HomeIcon} alt="Accueil" className="icon" />
      </Link>
      <Link to="/cadeaux" className="navbar-icon">
        <img src={CadeauxIcon} alt="Cadeaux" className="icon" />
      </Link>
      <Link to="/menu" className="navbar-icon">
        <img src={ImgNoel} alt="Menu de Noël" className="icon" />
      </Link>
      
    </div>
  );
};

export default Navbar;
