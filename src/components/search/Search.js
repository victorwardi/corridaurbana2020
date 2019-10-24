import React, {useState} from 'react';
import DatePicker, {setDefaultLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Search.module.css';
setDefaultLocale(ptBR);

const Search = (props) => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="row">
            <div className="col-6">
                <input type="text" placeholder="Corrida, local..."/>
            </div>
            <div className="col-2">
                <select className="" name="UF" onChange={event => props.onChangeUf(event.target.value)}>
                    <option value="UF">UF</option>
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                </select>
            </div>
            <div className="col-4">
                <DatePicker
                    dateFormat="P"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                />
            </div>
        </div>
    );
};

export default Search;
