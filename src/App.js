import React, { Component } from 'react';
import Tarjetas from './components/tarjetas/Tarjetas';
import Buscador from './components/buscador/Buscador';
import Boton from './components/boton/Boton';
import logo from './easylogo.png';
import Resultados from './components/resultados/Resultados';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



class App extends Component {
  render() {

    return (

    <div className="App">
      <Tarjetas />
    </div>
    )
  }
}

export default App;
