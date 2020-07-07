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
          <h1>Maintenance screen for charts and data storage in the browser</h1>
            <div className="box">
              <h1>Container</h1>
            </div>
        </main>    
      </div>
    </div>  
  );
}

export default Main;