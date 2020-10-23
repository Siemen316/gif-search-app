import React, { useContext, useEffect } from 'react';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Search from './components/Search';
import { MainContext } from './MainContext';

function App() {
  const { theme } = useContext(MainContext);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <NavBar />
      <Search />
      <Main />
    </div>
  );
}

export default App;
