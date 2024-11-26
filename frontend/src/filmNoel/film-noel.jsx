import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styleMovie.css';

const FilmsNoel = () => {
  const [movies, setMovies] = useState([]); // Initialisation des films
  const [searchQuery, setSearchQuery] = useState(''); // Recherche par title ou genre
  const [openMovieId, setOpenMovieId] = useState(null); // ID du film pour afficher/masquer les détails
  const [loading, setLoading] = useState(true); // État de chargement

  // Charger les films au montage du composant
  useEffect(() => {
    axios.get('http://localhost:8000/api/films-noel')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => console.error('Erreur lors du chargement des films:', error))
      .finally(() => setLoading(false));
  }, []);

  // Fonction pour ouvrir ou fermer les détails du film
  const toggleMovieDetails = (id) => {
    setOpenMovieId(openMovieId === id ? null : id);
  };

  // Fonction de recherche
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtrer les films en fonction de la recherche
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div className="films-container">
      <h2>Films de Noël</h2>

      {/* Formulaire de recherche */}
      <div className='search'>
        <input
          type="text"
          placeholder="Rechercher un film"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Affichage des films */}
      <div className="movies-list">
        {loading ? (
          <p>Chargement...</p>
        ) : filteredMovies.length === 0 ? (
          <p>Aucun film trouvé.</p>
        ) : (
          filteredMovies.map((movie) => (
            <div key={movie.title} className="movie-accordion">
              <div className="movie-summary">
                <p className="movie-title">{movie.title} ({movie.year})</p>
                <button onClick={() => toggleMovieDetails(movie.title)} className="toggle-button">
                  {openMovieId === movie.title ? 'Voir moins' : 'Voir plus'}
                </button>
              </div>
              {openMovieId === movie.title && (
                <div className="movie-details">
                  <p><strong>titre:</strong> {movie.title}</p>
                  <p><strong>Année:</strong> {movie.year}</p>
                  <p><strong>Description:</strong> {movie.description}</p>
                  <p><strong>Durée:</strong> {movie.duration} minutes</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FilmsNoel;