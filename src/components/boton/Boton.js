import React, {Component} from 'react';
import axios from 'axios';


class Boton extends Component { 

  render(){
    var Button = require ('react-bootstrap/lib/Button');

    return(
      <div>
        

        
          <Button bsStyle="primary"> Buscar </Button>
   

      </div>
    );

  }

}

      

 

export default Boton ;