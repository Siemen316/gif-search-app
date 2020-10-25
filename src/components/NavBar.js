import React, { useContext } from 'react';
import { GiFlame } from 'react-icons/gi';
import { CgDarkMode } from 'react-icons/cg';
import { MainContext } from '../MainContext';
const NavBar = () => {
  const { handleTheme } = useContext(MainContext);

  return (
    <nav>
      <header>
        <h1>
          GIF SEARCHER
          <GiFlame />
        </h1>
      </header>
      <div className="nav-contents">
        <ul className={'ul-flex'}>
          <button className="btn2" onClick={handleTheme}>
            <CgDarkMode className="dark" title="theme" />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
