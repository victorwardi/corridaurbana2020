import React from 'react';
import classes from './PageTitle.module.css';
const PageTitle = (props) => {
    return (<div className={classes.container}>
        <h1 className={classes.title}>{props.title}</h1>
    </div>);
};

export default PageTitle;
