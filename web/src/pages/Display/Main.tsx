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
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name data</td>
                  <td>Username data</td>
                  <td>
                    <button className="button muted-button">Editar</button>
                    <button className="button muted-button">Delet</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="game">
                1
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Main;