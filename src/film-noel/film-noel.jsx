import React, { useState, useEffect } from 'react';
import './style-movie.css';
import moviesData from './listFilmNoel.json'; // Importation directe du fichier JSON

const FilmsNoel = () => {
  const [movies, setMovies] = useState([]); // Liste des films
  const [searchQuery, setSearchQuery] = useState(''); // Recherche
  const [openMovieId, setOpenMovieId] = useState(null); // Détails du film

  // Charger les films depuis le fichier JSON local au montage
  useEffect(() => {
    setMovies(moviesData); // Charge les données directement depuis le JSON importé
  }, []);

  // Fonction pour afficher/masquer les détails
  const toggleMovieDetails = (id) => {
    setOpenMovieId(openMovieId === id ? null : id);
  };

  // Fonction de recherche
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtrer les films en fonction de la recherche
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="films-container">
      <h2>Films de Noël</h2>

      {/* Formulaire de recherche */}
      <div className="search">
        <input
          type="text"
          placeholder="Rechercher un film"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Liste des films */}
      <div className="movies-list">
        {filteredMovies.length === 0 ? (
          <p>Aucun film trouvé.</p>
        ) : (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-accordion">
              <div className="movie-summary">
                <p className="movie-title">
                  {movie.title} ({movie.year})
                </p>
                <button
                  onClick={() => toggleMovieDetails(movie.id)}
                  className="toggle-button"
                >
                  {openMovieId === movie.id ? 'Voir moins' : 'Voir plus'}
                </button>
              </div>
              {openMovieId === movie.id && (
                <div className="movie-details">
                  <p><strong>Titre:</strong> {movie.title}</p>
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
