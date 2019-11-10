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

    let {slug} = useParams();

    let slugUF = '';
    if (slug !== undefined) {
        slugUF = slug;
    }

    const getUF = (slug) => {
        for (let i in props.ufs) {
            if (props.ufs[i].slug === slug) {
                return props.ufs[i];
            }
        }
    }



    const [selectedUF, setSelectedUF] = useState(getUF(slugUF));
    const [startDate, setStartDate] = useState(new Date());
    console.log(selectedUF);
    let history = useHistory();

    const ufChangeHandler = (event) => {
        const ufSelectedCombo = props.ufs.filter(uf => uf.value === event.target.value)[0];
        setSelectedUF(ufSelectedCombo);
       history.push('/calendario/' + ufSelectedCombo.slug);
    }

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
                        <select onChange={ufChangeHandler} value={selectedUF.value}>
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
