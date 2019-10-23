import React from 'react';
import classes from './Main.module.css';
import Calendar from "../../calendar/Calendar";
const Main = () => {
    return (
        <div className={classes.Main}>
<Calendar/>
        </div>
    );
};

export default Main;
