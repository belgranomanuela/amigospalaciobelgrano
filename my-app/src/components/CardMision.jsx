import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './CardMision.module.css';


function QuienesSomos() {
    return (

        <Card body className='m-3'>
            <h1 className={styles.title}>Misión</h1>
            <p className={styles.text}>“Amigos del Palacio Belgrano es una iniciativa privada que tiene como objetivo agrupar a personas,
            instituciones y empresas comprometidas en el apoyo para la restauración, conservación y difusión del Palacio Belgrano en Argentina.
            Exponente del eclecticismo historicista combinando gestos del renacimiento, el gótico tardío y el modernismo, construido en la segunda
            mitad del s.XIX por el gran arquitecto Joaquín M. Belgrano. Es patrimonio histórico.”
            <br />

            Desde la Asociación Amigos del Palacio Belgrano iniciamos la convocatoria a expertos locales e internacionales en las áreas de
            arquitectura, cultura, patrimonio, paisajismo y ambientalismo para conformar un corpus de ideas que den forma a un plan integral
            por plazos, que no implique financiación estatal, entendiendo las limitaciones nacionales actuales por todos conocidas. Asimismo, que
            involucre actores del ámbito privado que fortalezcan las competencias, coincida en un mismo foco operacional y, sobre todo, que
            compartan nuestra visión, que no es más que la tendencia compartida a nivel mundial, que hoy reconoce como nunca que los edificios
            patrimoniales construyen el paisaje histórico de las ciudades que los albergan, representando el valor identitario y la singularidad
            misma de sus comunidades.
            </p>
        </Card>

    );
}

export default QuienesSomos;