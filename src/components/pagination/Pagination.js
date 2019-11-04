import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import classes from './Pagination.module.css';


const Pagination = props => {

    let pagination = [];
    console.log("PAGINATION");
    for (let i = 1; i <= props.total; i++) {
        pagination.push(
            <li key={i} className={props.active === i.toString() ? classes.active : ''}>
                <Link to={props.url + '/' + i}>{i}</Link>
            </li>
        )
    }

    return (
        <div className={classes.Pagination}>
            <ul>
                {pagination}
            </ul>
        </div>
    );
};

Pagination.propTypes = {
    url: PropTypes.string,
    total: PropTypes.number,
    active: PropTypes.string
};

export default Pagination;
