import React, {useState} from 'react';
import DatePicker, {setDefaultLocale} from "react-datepicker";
import classes from './Search.module.css';
import "react-datepicker/dist/react-datepicker.css";
import ptBR from 'date-fns/locale/pt-BR';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useHistory, useParams} from "react-router-dom";


setDefaultLocale(ptBR);

const Search = (props) => {


    const [startDate, setStartDate] = useState(new Date());


    return (

        <form>
            <div className={classes.Search}>
                <div className={classes.Search}>
                    <div>
                        <input type="text" placeholder="Corrida, local..."/>
                    </div>
                </div>
                <div className={classes.uf}>
                    <div className={classes.select}>
                        <select onChange={props.ufChangeHandler} value={props.selectedUF.value}>
                            {props.ufs.map((uf, i) =>
                                <option key={i} value={uf.value}>{uf.label}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className={classes.Search}>
                    <DatePicker
                        dateFormat="P"
                        selected={startDate}
                        onChange={date => setStartDate(date)}

                    />
                </div>
                <div className={classes.Search}><input className={classes.submit} type="submit" value="Submit"/></div>
            </div>
        </form>
    );
};

export default Search;
