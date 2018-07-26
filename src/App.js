import React, { Component } from 'react';
import Tarjetas from './components/tarjetas/Tarjetas';
import Buscador from './components/buscador/Buscador';
import logo from './easylogo.png';


class App extends Component {
  render() {

    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SLOGAN</h1>
        </header>
        <p className="App-intro">
          Sé parte de la comunidad EasyAdopt. Encuentra patitas cerca de ti en busqueda de una foreverhome.
        </p>


    
       <Buscador/>
       <Tarjetas/>
      </div>
    );
  }
}

export default App;
