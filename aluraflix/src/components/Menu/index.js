import React from 'react'
import Logo from './../../assets/img/Logo.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink';
import Button from '../Button'

 function Menu() {
    return (
        <nav className="Menu">
            <a herf="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;