import React, { useContext } from 'react';
import './header.styles.css'; // Importation du fichier CSS externe
import ChristmasMusic from '../christmas-music/music';
// attention a rajouter ../../ pour que ça fonctionne

const Header = () => {


  return (
    <main className='main'>
      <div className="header">
        <h1 className="title">Christmas Planner🎄</h1>
      </div>
      <div>
          <ChristmasMusic />
      </div>
    </main>
  );
};

export default Header;