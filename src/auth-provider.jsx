import React, { createContext, useState, useContext } from 'react';

// Crée le contexte d'authentification
const AuthContext = createContext();

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => useContext(AuthContext);

// Fournisseur d'authentification
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // État de l'utilisateur (null = non connecté)

  // Fonction pour se connecter
  const login = (username) => {
    setUser({ username });
    // Tu peux ici ajouter de la logique pour stocker le jeton (token) de l'utilisateur ou les détails
  };

  // Fonction pour se déconnecter
  const logout = () => {
    setUser(null);
    // Tu peux aussi supprimer le jeton ici si nécessaire
  };

  // Objet pour exposer les valeurs et les fonctions du contexte
  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user, // Indicateur si l'utilisateur est connecté
  };

  return (
    <AuthProvider value={value}>
      {children}
    </AuthProvider>
  );
};
