import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



class Boton extends Component { 

  render(){
    var Button = require ('react-bootstrap/lib/Button');

    return(
      <div>
        

        
<<<<<<< HEAD
          <Button bsStyle="primary"> Buscar </Button>
=======
          <Button bsStyle="primary"> 
          <li>
        <Link to={`/resultados`}>Buscar</Link>
      </li>
           </Button>
>>>>>>> 77a36b6d3eb48a16189c35d61a43198c4d999275
   

      </div>
    );

  }

}

      

 

export default Boton ;