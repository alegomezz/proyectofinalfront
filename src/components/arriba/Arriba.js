import React, {Component} from 'react';
import axios from 'axios';
import './Buscador.css';


class Buscador extends Component {

  state = {
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render(){

    return(
      <div>
     
      </div>
    );

  };

};

      

 

export default Buscador;