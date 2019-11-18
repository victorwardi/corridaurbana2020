import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo-corrida-urbana-horizontal.png';

const Header = () => {
    console.log('HEADER');
    return (<div className={classes.Header}>

            <div className={classes.logo}><img src={logo} alt="Corrida Urbana"/></div>


        <div className={classes.headerBase}></div>
        </div>);
};

export default Header;
