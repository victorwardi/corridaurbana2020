import React from 'react';
import classes  from './Footer.module.css';
const Footer = () => {
    return (
        <div className={classes.Footer}>
            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 210 1440 100"><path fill="#f1f1f1" fill-opacity="1" d="M0,288L480,288L960,224L1440,288L1440,0L960,0L480,0L0,0Z"></path></svg>*/}
        <footer className={classes.container}>
                <div>
                    <h2>LOGO</h2>
                </div>
                <div>
                    <h2>MEDIAS</h2>
                </div>
                <div>
                    <h2>CONTACT</h2>
                </div>
        </footer>
            </div>
    );
};

export default Footer;
