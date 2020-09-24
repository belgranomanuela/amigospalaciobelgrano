import React from 'react';
import { Carousel } from 'react-bootstrap';
import imagen1 from '../images/AYER/frentePalacio.jpg';
import imagen2 from '../images/AYER/fachadaPalacioConFamilia.jpg';
import imagen3 from '../images/AYER/FACHADA.jpg';



function Car() {
    return (
        <div className='row'>
            <div class="col-md-8 d-flex justify-content-center">
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-80"
                            style={{ height: '700px' }}
                            src={imagen1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-80"
                            style={{ height: '700px' }}
                            src={imagen2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-80"
                            style={{ height: '700px' }}
                            src={imagen3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Car;