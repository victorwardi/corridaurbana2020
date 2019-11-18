import React from 'react';
import classes from './Main.module.css';
import Calendar from "../Calendar/Calendar";
import Search from "../../components/search/Search";
import {Route, Switch, useParams} from "react-router-dom";
import Corrida from "../../components/calendar/Corrida/Corrida";


const Main = (props) => {

    return (<div className={classes.Main}>
            <Switch>
                <Route path={'/calendario/:slug?/:page?'}>
                    <Calendar/>
                </Route>
                <Route path={'/corrida/:slug'} component={Corrida}/>
            </Switch>
        </div>);
};

export default Main;
