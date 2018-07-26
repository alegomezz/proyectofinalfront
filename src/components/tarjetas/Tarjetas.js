import React, {Component} from 'react';
import './Tarjetas.css';
import mujer from './mujer.jpg';
import viejitos from './viejitos.jpg';
import family from './famiily.jpg';


class Tarjetas extends Component {
   render(){
       var Carousel = require ('react-bootstrap/lib/Carousel');
         return(
            <div>
                    <Carousel>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={viejitos} />
                    <Carousel.Caption>
                         <h3>Pedro y Susana</h3>
                         <p>"Nuestra vida ha cambiado gracias a la llegada de nuestro compañero peludo"</p>
                    </Carousel.Caption>
             </Carousel.Item>
              <Carousel.Item>
                 <img width={900} height={500} alt="900x500" src={mujer} />
                     <Carousel.Caption>
                         <h3> Elizabeth</h3>
                        <p>"Fue la mejor decisión que he tomado. Ahora las mañanas no empiezan con un café, sino con un paseo."</p>
                     </Carousel.Caption>
             </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src={family} />
                      <Carousel.Caption>
                        <h3>Familia Sanchez</h3>
                         <p>"Ya no podemos imaginar nuestra familia sin la compañía de nuestro pequeño Rufus."</p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      
            </div>
        
       
     );
   };


};

export default Tarjetas;