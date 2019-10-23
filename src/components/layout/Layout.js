import React from 'react';
import PropTypes from 'prop-types';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";


const Layout = props => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
};

Layout.propTypes = {};

export default Layout;
