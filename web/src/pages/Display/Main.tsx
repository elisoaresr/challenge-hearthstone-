import React from 'react';

import Logo from '../../assets/logo.png';
import './styles.css';

const Main = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={Logo} alt="HearthStone" />
        </header>

        <main>
          <div className="box">
            <section className="memory-game">
              <div className="memory-card">
                {/*<img className="front-face" src="img/react.svg" alt="React"/>
                <img className="back-face" src="img/js-badge.svg" alt="Memory Card"/>/*
  */}         </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Main;