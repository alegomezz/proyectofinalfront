import React, { Component } from 'react';
import Tarjetas from './components/tarjetas/Tarjetas';
import Buscador from './components/buscador/Buscador';
import Boton from './components/boton/Boton';
// import Resultados from './components/resultados/Resultados';
import logo from './easylogo.png';
import {Link, Route, Router} from 'react-router';


class App extends Component {
  render(
    
  ) {

    return (
      <div className="App">
        
        <header className=" App-header" >
          <img src={logo} className="App-logo center-block" alt="logo" />
        </header>
        <div className="slogan text-center">
        <h2 className="App-title text-white">LLenando vidas de amor :) </h2>
      
        <p className="App-intro text-white">
          Sé parte de la comunidad EasyAdopt. Encuentra patitas cerca de ti en busqueda de una foreverhome.
        </p>


       <Buscador/> 
      <br></br>
       <Boton/>
       
      </div>
      <Tarjetas/>
     
      </div>
    );
  }
}

export default App;
