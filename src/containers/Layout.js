import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";


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
