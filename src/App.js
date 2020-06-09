import React from 'react';
import './App.css';

import Countrieslist from './components/Countrieslist';

function App() {



  return (
    
    <>
    <p>
      <div className="container-fluid header">
      <div className="col-12">
        <h1 >Country wiki</h1>
        <p >Select a country to learn more about it !</p>
        </div>
  </div>
    </p>
    <Countrieslist />

    
</>
  );
}

export default App;
