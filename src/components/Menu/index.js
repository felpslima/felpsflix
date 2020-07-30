import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../../components/Button';
// import ButtonLink from './compenents/ButtonLink/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="FelpsFlix logo" />
            </Link>
            <Button as={Link} to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    ); 
}

export default Menu;