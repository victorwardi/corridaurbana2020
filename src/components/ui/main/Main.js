import React, {useState} from 'react';
import classes from './Main.module.css';
import Calendar from "../../calendar/Calendar";
import Search from "../../search/Search";

const Main = () => {

    const [uf, setUf] = useState('rj');

    const ufChangeHandler = (ufSelected) => {
        setUf(ufSelected);
    }

    return (
        <div className={classes.Main}>
            <Search onChangeUf={ufChangeHandler}/>
            <Calendar uf={uf}/>
        </div>
    );
};

export default Main;
