import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href ="/"> Navbar </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="perfil">Perfil</Nav.Link>
                </Nav>
            </Navbar>
        </div>
     )
}

export default Header