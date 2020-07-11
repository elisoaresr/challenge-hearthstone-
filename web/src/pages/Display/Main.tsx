import React, { useEffect, useState } from 'react';

import Logo from '../../assets/logo.png';
import './styles.css';


const Main = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={Logo} alt="HearthStone" />
        </header>

        <form>
          <ul className="items-grid">
            <li>
              <span>Mago</span>
            </li>

            <ul className="items-grid">
              <li>
                <span>Paladino</span>
              </li>
            </ul>

            <ul className="items-grid">
              <li>
                <span>Caçador</span>
              </li>
            </ul>

            <ul className="items-grid">
              <li>
                <span>Druida</span>
              </li>
            </ul>

            <ul className="items-grid">
              <li>
                <span>Goa'uld</span>
              </li>
            </ul>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Main;