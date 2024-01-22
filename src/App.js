import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


const multimediaItems = [
  { id: 1, type: 'Pc Gameur', brand: 'lenevo', model: '2022', monthlyCost: 150, url: 'https://www.lenovo.com/fr/fr/legion/?orgRef=https%253A%252F%252Fwww.google.com%252F', image: 'lenovo.jpg' },
  { id: 2, type: 'Rétroprojecteur', brand: 'Hp', model: '2022', monthlyCost: 25, url: 'https://www.fnac.com/tv/retroprojecteur/q', image: 'rétroprojecteur.jpg' },
  { id: 3, type: 'Accessoire clavier souris', brand: 'Razer', model: '2022', monthlyCost: 6, url: 'https://www.razer.com/fr-fr/pc/gaming-keyboards-and-keypads', image: 'cs.jpg' },
  { id: 4, type: 'Écran', brand: 'Asus', model: '2024', monthlyCost: 16, url: 'https://www.boulanger.com/c/ecran-pc-moniteur/brand~asus', image: 'écran.jpg' },
];


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);


  const handleLoginClick = () => {
    setLoggedIn(true);
  };



  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route
              path="/login"
              element={
                <div className="login-page">
                  {loggedIn ? (
                    <p>Bienvenue, {username} !</p>
                  ) : (
                    <form>
                      <label>
                        Nom d'utilisateur:
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Votre nom d'utilisateur"
                        />
                      </label>
                      <label>
                        Mot de passe:
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Votre mot de passe"
                        />
                      </label>
                      <button type="button" onClick={handleLoginClick}>
                        Se connecter
                      </button>
                    </form>
                  )}
                </div>
              }
            />
          </Routes>
          <MainContent />
        </div>
      </div>
    </Router>
  );

  function Sidebar() {
    const [activeLink, setActiveLink] = useState('/');

    return (
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={activeLink === '/' ? 'active' : ''}
                onClick={() => setActiveLink('/')}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={activeLink === '/' ? 'active' : ''}
                onClick={() => setActiveLink('/')}
              >
                qui somme nous ?
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={activeLink === '/login' ? 'active' : ''}
                onClick={() => setActiveLink('/login')}
              >
                Connexion
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  function MainContent() {
    return (
      <div className="main-content">
        <header className="App-header">
          <h1>Location de matériel multimédia </h1>
        </header>
        <main className="App-main">
          <ul className="item-list">
            {multimediaItems.map((item) => (
              <li key={item.id} className="item">
                <div className="item-container">
                  <div className="image-container">
                    <img src={item.image} alt={`${item.type} ${item.brand}`} />
                  </div>
                  <div className="text-container">
                    <strong>
                      <Link to={item.url}>{`${item.type} ${item.brand} ${item.model}`}</Link>

                    </strong>
                    <p className="monthly-cost">Coût par mois: €{item.monthlyCost}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
        <footer className="App-footer">
          <p>&copy; 2023 Système de Gestion de Location de matériel - Adam Oulalit</p>
        </footer>
      </div>
    );
  }
}


export default App;
