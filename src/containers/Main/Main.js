import React from 'react';
import classes from './Main.module.css';
import Calendar from "../Calendar/Calendar";
import Search from "../../components/search/Search";
import {Route} from "react-router-dom";

const Main = () => {
    return (
        <div className={classes.Main}>
            <Route exact path={'/calendario/:uf'} component={Search}/>
            <Route exact path={'/calendario/:uf'} component={Calendar}/>
        </div>
    );
};

export default Main;
