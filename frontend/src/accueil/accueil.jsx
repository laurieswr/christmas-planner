import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CompteRebours from '../compte-rebours/compte-rebours';
import './Accueil.css';

const Accueil = () => {
  const navigate = useNavigate();


  return (
    <div>
      <div className='compterebours'>
        <CompteRebours />
      </div>
      <div className='accueilText'>
          <p>
            Sur ce site vous pouvez trouver les cadeaux que vous aurez noté pour votre famille ou amis.
          </p>
          <p>
            Vous pourrez voir une liste de entrées, des plats et des desserts avec leurs recettes. Vous pouvez aussi voir une liste de films de Noël.
          </p>
      </div>
    </div>
  );
};

export default Accueil;