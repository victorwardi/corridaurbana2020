import React from 'react';
import classes from './Loader.module.css'
const Loader = (props) => {

        return props.show ? <div className={classes.background}>
                    <div className={classes.loader}></div>
        </div> : null;

};

export default Loader;
