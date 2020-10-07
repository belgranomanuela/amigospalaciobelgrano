import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './CardMision.module.css';
import Menu from './Navbar.jsx';
import Cover from '../images/COVEROK.jpg';
import Mision from './CardMision.jsx';
import { Image } from 'react-bootstrap';
import estilos from './Home.module.css';

function Home() {
    return (
        <div>
            <Image src={Cover} fluid className='mb-5' />
            <Mision />
            <Card body className='m-3'>
                <div className='m-4'>
                    <h1 className={styles.title} >Contacto</h1>
                    <br></br>
                    <p className={styles.text} >Podrá contactarse con nosotros por cualquier consulta a amigospalaciobelgrano@gmail.com</p>
                </div>
            </Card>
            <footer>
                <div className="container">
                    <div>
                        <div className={estilos.socialFooter}>
                            <a href="https://www.instagram.com/amigospalaciobelgrano/" target="blank"><i className="fa fa-instagram"></i></a>
                            <br />
          2020 - Designed by Manuela Belgrano
                        </div>
                    </div>
                </div>
            </footer >
        </div >

    );
}

export default Home;