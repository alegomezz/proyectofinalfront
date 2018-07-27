import React, { Component } from 'react';
import Tarjetas from './components/tarjetas/Tarjetas';
import Buscador from './components/buscador/Buscador';
import Boton from './components/boton/Boton';
import logo from './easylogo.png';
import {Link, Route, Router} from 'react-router';


class App extends Component {
  render(
    
  ) {

    return (
      <div className="App">
        
        <header className="App-header" >
          <img src={logo} className="App-logo center-block" alt="logo" />
        </header>
        <div className="slogan text-center">
        <h1 className="App-title text-white">LLenando vidas de amor :) </h1>
      
        <p className="App-intro text-white">
          Sé parte de la comunidad EasyAdopt. Encuentra patitas cerca de ti en busqueda de una foreverhome.
        </p>
<<<<<<< HEAD
        <Buscador/>
          </div> 
     
=======


       <Buscador/> <Boton/>
>>>>>>> ec881135c41491850945c15f083dd34fa56a4b1c
       <Tarjetas/>
      </div>
    );
  }
}

export default App;
