import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function Menu() {
    return (
        <>
            <Navbar bg="light" variant="light">

                <Navbar.Brand href="#home">
                    Amigos del Palacio Belgrano</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Quienes Somos</Nav.Link>
                    <Nav.Link href="#features">Historia</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default Menu;