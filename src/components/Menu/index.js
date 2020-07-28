import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../../components/Button';
// import ButtonLink from './compenents/ButtonLink/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="FelpsFlix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    ); 
}

export default Menu;