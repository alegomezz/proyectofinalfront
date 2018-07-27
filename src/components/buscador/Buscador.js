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
        <form action="">
          <input place holder = "Tú ubicación..." 
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          />
          </form>

      </div>
    );

  };

};

      

 

export default Buscador;