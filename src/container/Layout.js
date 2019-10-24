import React from 'react';
import PropTypes from 'prop-types';
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import Main from "../components/ui/main/Main";


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
