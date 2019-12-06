import React from 'react';
import classes from "./CorridaThumbPreview.module.css";
import classesCorrida from "../../Corridas/Corridas.module.css";



const CorridaThumbPreview = () => {


    return (<div  className={classesCorrida.Corridas}>
        <div className={classes.corrida}></div>
        <div className={classes.corrida}></div>
        <div className={classes.corrida}></div>
        <div className={classes.corrida}></div>
        <div className={classes.corrida}></div>
        <div className={classes.corrida}></div>
        <div className={classes.corrida}></div>
        <div className={classes.corrida}></div>
        <div className={classes.corrida}></div>
        <div className={classes.corrida}></div>
        <div className={classes.corrida}></div>
    </div>);
};

export default CorridaThumbPreview;
