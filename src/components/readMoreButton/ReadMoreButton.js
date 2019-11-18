import React from 'react';
import classes from './ReadMoreButtom.module.css';

const ReadMore = (props) => {


    return (<div className={classes.ReadMoreButton}>
        {
            props.isLoading ? <div className={classes.loading}><div>CARREGANDO</div><div className={classes.loader}></div></div> :
            <button onClick={props.onClick}>CARREGAR MAIS CORRIDAS</button>
        }
    </div>);
};

export default ReadMore;
