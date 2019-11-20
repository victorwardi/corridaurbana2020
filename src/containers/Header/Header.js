import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo-corrida-urbana-horizontal.png';
import Nav from "../Menu/Nav";

const Header = () => {
    console.log('HEADER');
    return (<div className={classes.Header}>
        <div className={classes.menu}><Nav/></div>
        <div className={classes.logo}>
            <img src={logo} alt="Corrida Urbana"/>
            <h1>CALENDÁRIO DE CORRIDAS DE RUA</h1>
        </div>

        <div className={classes.headerBase}></div>
    </div>);
};

export default Header;
