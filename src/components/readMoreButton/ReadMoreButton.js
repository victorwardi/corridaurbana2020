import React from 'react';
import classes from './ReadMoreButtom.module.css';

const ReadMore = (props) => {
    return (<div className={classes.ReadMoreButton}>
            <button onClick={props.onClick}>CARREGAR MAIS CORRIDAS</button>
    </div>);
};

export default ReadMore;
