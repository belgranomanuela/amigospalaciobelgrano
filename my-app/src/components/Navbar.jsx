import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';



function Menu() {

    return (
        <>
            <nav>
                <ul className={styles.Menu} id='myTopnav'>
                    <Link to='/'>
                        <li className="nav-item"> <a href="">Amigos del Palacio Belgrano </a> </li>
                    </Link>
                    <Link to='/arquitecto'>
                        <li className="nav-item"> <a href="#">Arquitecto</a></li>
                    </Link>
                    <Link to='/palacio'>
                        <li className="nav-item"> <a href="#">Palacio</a></li>
                    </Link>
                </ul>

            </nav>

        </>
    );
}

export default Menu;