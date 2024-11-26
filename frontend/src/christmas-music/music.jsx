import React from 'react';

const ChristmasMusic = () => {
  return (
    <div>
      {/* Playlist Christmas Classics */}
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4dopZ9vOp1t"  // URL correcte de la playlist
        width="250"  // Largeur réduite
        height="150"  // Hauteur réduite
        frameBorder="0"
        allow="encrypted-media"
        title="Christmas Classics"
      />
      
      {/* Ajouter d'autres playlists de Noël ici */}
    </div>
  );
};

export default ChristmasMusic;

