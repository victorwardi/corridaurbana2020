import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Adsense from "../components/adsense/Adsense";


const Layout = props => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>);
};

export default Layout;
