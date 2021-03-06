import React from 'react';
import classes from './Main.module.css';
import Calendar from "../Calendar/Calendar";
import {Route, Switch} from "react-router-dom";
import Corrida from "../../components/calendar/Corrida/Corrida";
import Banner from "../../components/banner/Banner";

const Main = (props) => {
    console.log('MAIN');

    return (<div className={classes.Main}>
        <Banner/>
        <Switch>
            <Route path={'/calendario/:ufParam?/:searchParam?'}>
                <Calendar/>
            </Route>
            <Route path={'/corrida/:slug'} component={Corrida}/>
        </Switch>
    </div>);
};

export default Main;
