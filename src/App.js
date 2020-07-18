/*global FB*/

import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    FB.login((res) => {
      console.log(res)

      if (res.status === "connected") {
        FB.api('/me', (user) => {
          console.log(user);
          setUser(user);
        });
      }
    });
  }

  const logout = () => {
    FB.logout(response => setUser(null));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://user-images.githubusercontent.com/4307307/54653565-85fa5680-4a91-11e9-8914-343954c53d3e.png" className="App-logo" alt="logo" />
        <p>
          POC OAuth 2.0
        </p>

        {!user ?
          <div>
            <button className="btn-facebook" onClick={login}>
              Fazer login com Facebook
            </button>
          </div>
          : <>
            <p>Olá {user.name}</p>

            <div>
              <button onClick={logout}>
                Sair do Facebook
            </button>
            </div>
          </>}
      </header>
    </div>
  );
}

export default App;