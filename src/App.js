import React from 'react';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Search from './components/Search';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Search />
      <Main />
    </div>
  );
}

export default App;
