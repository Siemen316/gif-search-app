import React, { useState } from 'react';
import '../nav.css';
import { GiFlame } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';
const NavBar = () => {
  const [toggle, setToggle] = useState(true);
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
