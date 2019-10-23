import React from 'react';
import classes  from './Footer.module.css';
const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className="d-flex justify-content-lg-around">
                <div>
                    <h2>LOGO</h2>
                </div>
                <div>
                    <h2>MEDIAS</h2>
                </div>
                <div>
                    <h2>CONTACT</h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
