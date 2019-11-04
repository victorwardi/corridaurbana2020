import React from 'react';
import classes from './Main.module.css';
import Calendar from "../Calendar/Calendar";
import Search from "../../components/search/Search";
import {Route, Switch} from "react-router-dom";
import Corrida from "../../components/calendar/Corrida/Corrida";


const Main = () => {
    return (
        <div className={classes.Main}>
<Switch>
                <Route path={'/calendario/:uf/:page?'} component={Calendar}/>
                <Route path={'/calendario/:uf'} component={Search}/>
                <Route path={'/corrida/:slug'} component={Corrida}/>
               <Route  path={'/'} render={() =>(<h1>TESTE ROUTE</h1>)}/>
</Switch>
        </div>
    );
};

export default Main;
