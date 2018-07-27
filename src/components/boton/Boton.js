import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



class Boton extends Component { 

  render(){
    var Button = require ('react-bootstrap/lib/Button');

    return(
      <div>
        

        
          <Button bsStyle="primary"> 
          <li>
        <Link to={`/resultados`}>Buscar</Link>
      </li>
           </Button>
   

      </div>
    );

  }

}

      

 

export default Boton ;