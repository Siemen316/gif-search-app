import React, { useContext, useState } from 'react';
import { GiFlame } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg';
import { MainContext } from '../MainContext';
const NavBar = () => {
  const { handleTheme } = useContext(MainContext);
  const [toggle, setToggle] = useState(true);
  console.log(handleTheme);

  return (
    <nav>
      <header>
        <h1>
          GIF SEARCHER
          <GiFlame />
          <AiOutlineMenu
            className="menu-icon"
            onClick={() => setToggle(!toggle)}
          />
        </h1>
      </header>
      <div className={toggle ? 'nav-contents' : 'show'}>
        <ul className={'ul-flex'}>
          <li>
            <a href="#h">HOME</a>{' '}
          </li>
          <li>
            <a href="#a">ABOUT</a>
          </li>
          <li>
            <a href="#m">MORE</a>{' '}
          </li>
          <button className="btn2" onClick={handleTheme}>
            <CgDarkMode className="dark" />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
