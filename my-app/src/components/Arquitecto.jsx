import React from 'react';
import imagenArquitecto from '../images/AYER/JOAQUINMARIANOBELGRANO.jpg';
import { Card } from 'react-bootstrap';
import styles from './Arquitecto.module.css';

function Arquitecto() {

    return (
        <div>
            <div >
                <img className='m-5' src={imagenArquitecto} alt="" style={{ width: '500px' }} />
            </div>
            <div>
                <h1 className={styles.titleArquitecto}>Arquitecto Joaquín Mariano Belgrano</h1>

                <h3 className={styles.titleArquitecto}>ARQUITECTO Y MILITAR</h3>
                <p className={styles.textoArquitecto}> Teniente Coronel del Ejercito Nacional Argentino, veterano de Cura Malal junto al General Luis M. Campos, fue también
                uno de los actores fundamentales de la arquitectura en el país.
                Casado con Josefina Rawson (hija del Dr. Guillermo Rawson, creador de la Cruz Roja Argentina, Presidente de la Nación interino,
                padre del Higienismo), tuvo 7 hijos: Mariano Rómulo Joaquín, su hijo y Mariano Guillermo Joaquín, su nieto, serían arquitectos
                    también. <br /><br />

                    Como sobrino bisnieto del mejor prócer de la patria, el General Manuel Belgrano, Joaquín llevaba en su sangre el mismo código
                    de integridad, deber a la patria, humildad y sentido ciudadano. A diferencia de sus colegas abocados a obra privada, fue
                    vocación de Belgrano dedicar su talento a la obra pública, sobre todo. Compartía los ideales de su ilustre ancestro, quien ya
                    había expuesto en 1796 que era imprescindible la creación de una escuela de dibujo que asentara los principios de la enseñanza
                    rofesional. Así, fundó junto a Ernesto Bunge la Sociedad Central de Arquitectos en 1886 y junto a Alejandro Chistophersen y Paul
                    ary la primera Escuela de Arquitectura (pero murió el año de su inauguración, 1901). Lo proyectó a imagen de la Escuela de Bellas
                    Artes de París donde había estudiado. Serian, además, los primeros profesores titulares de arquitectura. Fue primer Inspector
                    General de Arquitectura del Ministerio de obras Públicas.<br /><br />

                    La carrera de Belgrano estaba predestinada a una gloria sin precedentes que solo la muerte habría de arrebatarle a sus cortos 46 años,
                    y la que sumiría su figura a un reconocimiento unánime, pero solo entre sus enormes pares y publicaciones especializadas. Los laureles
                    de grandes proyectos en curso se adjudicaron a aquellos asignados a completarlos (casos Colegio Nacional de Mendoza “Agustín Álvarez” -
                    Ing. Juan Pablo Civit- hoy monumento provincial; y Parroquia Nuestra Señora de Aránzazu en San Fernando -Ing. Vicente Castro Zelaya-).
                    <br /><br />
                    Llegado a Buenos Aires a comienzos de la década del ´80 y hasta el año de su súbita muerte en plena madurez de su genio creativo, elevó
                    a complejidad, riqueza y belleza del paisaje urbano del país, con escuelas palaciegas, iglesias, asilos, estancias, edificios estatales,
                    residencias privadas y mausoleos que aún, en muchos casos, sobre todo las escuelas, perviven. Fue autor del templete de protección del
                    salón de la Jura de la Independencia (“Casa de Tucumán”), donde Belgrano abogaría “sobre la conservación de todo tipo de materialidad
                    relacionada con el pasado”.<br /><br />

                    En San Fernando proyectó la quinta Jacobé (hoy Museo de San Fernando) y la fachada de Nuestra Señora de Aránzazu de San Fernando, la
                    cual, a causa de su muerte, retomaría el Ing. Vicente Castro Zelaya. La estancia Las Hormigas de Alfonso Ayerza (que sufriera el mismo
                    destino del palacio -incendio-), el primer banco español, la iglesia de Santa Lucia y 15 escuelas palaciegas a lo largo del país, entre
                    un total aproximado de 35 obras privadas y estatales en solo 20 años de carrera. Su muerte privó al país de una producción de obra
                    predestinada a un destino glorioso. Algunos dicen que hubiera llegado a ser “el prócer de la arquitectura” dado que cedió su talento a
                    la proyección de obra pública de nacional. Fue arquitecto, el séptimo de un país que en esos tiempos honraba sólo a los ingenieros.
                    Eduardo Le Monnier y Bartolomé Raffo recordarían a don Joaquín como “uno de nuestros artistas más geniales”.
</p>
                <h3 className={styles.suObra}>SU OBRA</h3>
                <p className={styles.textoArquitecto}>


                    Iglesias:
                    <ul>
                        <li>
                            Iglesia de Santa Lucía, en la calle Montes de Oca, en Barracas, en 1887
                        </li>
                        <li>
                            Iglesia San Juan (Alsina y Piedras)
                        </li>
                        <li>
                            Fachada Parroquía Nuestra Señora de Aránzazu (San Fernando, la culmina su socio
                            y segundo marido de su mujer, Ing. Vicente Castro Zelaya)
                        </li>
                    </ul>




                    Obra Privada:
                    <ul>
                        <li>Residencia de Joaquín Cullen (calle Piedad, hoy Bartolomé Mitre 1263) </li>
                        <li> Residencia de Juan J. Blaquier (calle Suipacha, frente a la Ópera)</li>
                        <li> Residencia de José M. Belgrano (Alsina 1123)</li>
                        <li>Residencia de José M. Belgrano (Alsina 1123) </li>
                        <li>Residencia de Carlos Rodríguez Larreta (Centro)</li>
                        <li> Residencia de Gregorio Soler (sobre la nueva Avenida de Mayo)</li>
                        <li>Las dos casas del Ingeniero Guillermo White (la de Buenos Aires en Libertad 926 y la de veraneo en San Fernando)</li>
                        <li> Residencia de Augusto Coelho, (Rodríguez Peña y Tucumán)</li>
                        <li>Residencia de Sestagaray (sobre la calle Defensa)</li>
                        <li>Residencia de Quirno Costa (Santa Fe 1461)</li>
                        <li>  Casas de departamentos Ayerza, (Piedras 747/765)</li>
                        <li> Estancia de Leonardo Pereyra (hoy Escuela Vucetich)</li>
                        <li>Estancia Las Hormigas, familia Ayerza (Plátanos)</li>
                    </ul>

                    Mausoleos:
                    <ul>
                        <li> Mausoleo familia Ayerza</li>
                        <li> Mausoleo familia Frías</li>
                        <li> Mausoleo familia Piñeyro</li>
                        <li> Mausoleo familia Pereyra</li>
                        <li> Mausoleo familia Jacobé</li>
                        <li> Mausoleo familia Belgrano (actual Mac Donald)</li>
                    </ul>

                    Obra Pública:
                    <ul>
                        <li>Escuela de Arquitectura de Buenos Aires (Perú 294)</li>
                        <li>Templete de protección del salón de la Jura de la Independencia (“Casa de Tucumán”)
                    Cárcel Correccional de Menores</li>
                        <li>Estación Central de Ferrocarriles</li>
                        <li>Proyecto de terminación de la casa de gobierno de Buenos Aires</li>
                        <li>Escuela Normal - Edificio Existente (Azul)</li>
                        <li>Colegio Nacional ex Aduana (Mendoza). Hoy Agustin Alvarez, Patrimonio Provincial</li>
                        <li>Escuela Normal De Maestros (San Juan)</li>
                        <li>Escuela Normal De Profesoras - Edificio Existente (Concepcion Del Uruguay)</li>
                        <li>Escuela Graduada (Curuzu Cuatia)</li>
                        <li>Escuela Normal (Mercedes)</li>
                        <li>Depósito De Cartuchos y Muelles (Isla Martin García)</li>
                        <li>Resguardo Darsena Norte - Anteproyecto (Cdad. De Bs. As.)</li>
                        <li>Faro San Martin En Cabo San Antonio (San Antonio De Areco )</li>
                        <li>Resguardo Atalaya (Magdalena)</li>
                        <li>Subprefectura de Tigre (Tigre)</li>
                        <li>Colegio Nacional - Proyecto no ejecutado (Parana)</li>
                        <li>Colegio Nacional (San Juan - 9 De Julio)</li>
                        <li> Asilo De Leprosos (Corrientes)</li>
                        <li>Banco Español Del Rio de La Plata (Reconquista 180)</li>
                        <li> Escuela Normal En Esperanza – Anteproyectos</li>
                        <li> Receptoria -Anteproyecto (Villa Constitucion)</li>
                    </ul>
                </p>

            </div>
            <footer>
                <div className="container">
                    <div>
                        <div className={styles.socialFooter}>
                            <a href="https://www.instagram.com/amigospalaciobelgrano/" target="blank"><i className="fa fa-instagram"></i></a>
                            <br />
          2020 - Designed by Manuela Belgrano
                        </div>
                    </div>
                </div>
            </footer >
        </div>
    );
}

export default Arquitecto;