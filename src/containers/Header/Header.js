import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    console.log('HEADER');
    return (
        <div className={classes.Header}>
            <h1>Corrida Urbana 2020</h1>
        </div>
    );
};

export default Header;
