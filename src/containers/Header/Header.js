import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo-corrida-urbana-horizontal.png';
import Nav from "../Menu/Nav";
import Banner from "../../components/banner/Banner";

const Header = () => {
    console.log('HEADER');
    return (<div className={classes.Header}>

        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={logo} alt="Corrida Urbana"/>
            </div>
            <Nav/>
        </div>
        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#f1f1f1" fill-opacity="1" d="M0,96L480,32L960,96L1440,32L1440,320L960,320L480,320L0,320Z"></path></svg>*/}
    </div>);
};

export default Header;
