import React from "react";
import logo from "../assets/img/logoblanco.png;"


export default function Navbar () {
    return (
        <header>
            <Nav>
                <NavLogo>
                    <img src={logo} alt="lm" />
                </NavLogo>

                <NavUl>
                    <NavList>
                        <NavLink> Inicio </NavLink>
                        <NavLink> Productos </NavLink>
                        <NavLink> Contactos </NavLink>
                        <NavLink> Ubicacion </NavLink>
                    </NavList>
                </NavUl>
            </Nav>
        </header>
    );
}