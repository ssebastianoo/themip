import React from 'react';
import './App.css';
import ShowCases from './ShowCases';
import Customers from './Customers';

function App() {
  return (
    <div className="App">
      <header>
        <div className="Title">
          <div className="TopBox">
            <h1>
              <span>THEMIP</span>
            </h1>
            <p>We build the best product you'll ever see, no need for anything else!</p>
          </div>
        </div>
      </header>
      <main>
        <ShowCases />
        <Customers />
      </main>
    </div>
  );
}

export default App;
