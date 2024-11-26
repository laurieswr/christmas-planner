const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 8000;

// Middleware pour gérer les requêtes en JSON
app.use(express.json());
app.use(cors()); // Activation de CORS pour toutes les requêtes

// Middleware pour journaliser les requêtes
app.use((req, res, next) => {
  console.log('Requête reçue : ' + req.url);
  next();
});

// Fonction pour lire les films de Noël depuis le fichier JSON
const getFilmsNoel = (callback) => {
  fs.readFile('listFilmNoel.json', 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, JSON.parse(data));
  });
};

// Route pour obtenir la liste complète des films de Noël
app.get('/api/films-noel', (req, res) => {
  getFilmsNoel((err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur de lecture du fichier' });
    }
    res.json(data.films_de_noel);
  });
});

// Route pour rechercher un film par titre
app.get('/api/films-noel/search', (req, res) => {
  const searchTerm = req.query.title;

  if (!searchTerm) {
    return res.status(400).json({ message: 'Veuillez spécifier un titre à rechercher.' });
  }

  getFilmsNoel((err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur de lecture du fichier' });
    }

    const filteredFilms = data.films_de_noel.filter(film =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredFilms.length > 0) {
      res.json(filteredFilms);
    } else {
      res.status(404).json({ message: 'Aucun film trouvé avec ce titre.' });
    }
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
