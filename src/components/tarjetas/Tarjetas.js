import React, {Component} from 'react';
import './Tarjetas.css';
<<<<<<< HEAD
import mujer from './1.jpg';
import viejitos from './2.jpg';
import family from './3.jpg';
=======
import mujer from './mujer.jpg';
import viejitos from './viejitos.jpg';
import family from './famiily.jpg';
import {Switch, Route} from 'react-router-dom';
import {Boton} from '../boton/Boton';
import {Resultados} from '../resultados/Resultados';
>>>>>>> 77a36b6d3eb48a16189c35d61a43198c4d999275


class Tarjetas extends Component {
   render(){
       var Carousel = require ('react-bootstrap/lib/Carousel');
         return(
            <div>
              <Switch>
                <Route  path="/boton" component="Boton"/>
                <Route  path="/resultados" component="Resultados"/>
              </Switch>
                    {/* <Carousel>
            <Carousel.Item>
                <img className="carrousel-item" src={viejitos} />
                    <Carousel.Caption>
                         <h1 className="title-carousel">Pedro y Susana</h1>
                         <p className="text-carousel">"Nuestra vida ha cambiado gracias a la llegada de nuestro compañero peludo"</p>
                    </Carousel.Caption>
             </Carousel.Item>
              <Carousel.Item>
                 <img className="carrousel-item" src={mujer} />
                     <Carousel.Caption>
                         <h1 className="title-carousel"> Elizabeth</h1>
                        <p className="text-carousel">"Fue la mejor decisión que he tomado. Ahora las mañanas no empiezan con un café, sino con un paseo."</p>
                     </Carousel.Caption>
             </Carousel.Item>
            <Carousel.Item>
              <img className="carrousel-item" src={family} />
                      <Carousel.Caption >
                        <h1 className="title-carousel">Familia Sanchez</h1>
                         <p className="text-carousel">"Ya no podemos imaginar nuestra familia sin la compañía de nuestro pequeño Rufus."</p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       */}
            </div>
        
       
     );
   };


};

export default Tarjetas;