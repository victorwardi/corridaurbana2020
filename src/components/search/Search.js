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

    // const ufs = ['Todos', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    const ufs = [
        {"label": "Acre", "value": "AC"},
        {"label": "Alagoas", "value": "AL"}, {
            "label": "Amap\u00e1", "value": "AP"
        }, {"label": "Amazonas", "value": "AM"}, {"label": "Bahia", "value": "BA"}, {
            "label": "Cear\u00e1",
            "value": "CE"
        }, {"label": "Distrito Federal", "value": "DF"}, {
            "label": "Esp\u00edrito Santo",
            "value": "ES"
        }, {"label": "Goi\u00e1s", "value": "GO"}, {"label": "Maranh\u00e3o", "value": "MA"}, {
            "label": "Mato Grosso",
            "value": "MT"
        }, {"label": "Mato Grosso do Sul", "value": "MS"}, {
            "label": "Minas Gerais",
            "value": "MG"
        }, {"label": "Paran\u00e1", "value": "PR"}, {"label": "Para\u00edba", "value": "PB"}, {
            "label": "Par\u00e1",
            "value": "PA"
        }, {"label": "Pernambuco", "value": "PE"}, {"label": "Piau\u00ed", "value": "PI"}, {
            "label": "Rio Grande do Norte",
            "value": "RN"
        }, {"label": "Rio Grande do Sul", "value": "RS"}, {
            "label": "Rio de Janeiro",
            "value": "RJ"
        }, {"label": "Rond\u00f4nia", "value": "RO"}, {"label": "Roraima", "value": "RR"}, {
            "label": "Santa Catarina",
            "value": "SC"
        }, {"label": "Sergipe", "value": "SE"}, {"label": "S\u00e3o Paulo", "value": "SP"}, {
            "label": "Tocantins",
            "value": "TO"
        }];

    const [selectedUF, setSelectedUF] = useState(ufs[0]);
    let {uf} = useParams();
    if (uf !== '') {
    }

    const [startDate, setStartDate] = useState(new Date());

    let history = useHistory();

    const ufChangeHandler = (event) => {
        console.log(event.target.value);
        setSelectedUF(event.target.value);
        history.push('/calendario/' + event.target.value.toString().toLowerCase());
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
                        <select onChange={ufChangeHandler}>
                            <option selected disabled>Selecione um Estado</option>
                            <option value="">Todos</option>
                            {ufs.map((uf, i) =>
                                <option key={i} value={uf.value} defaultValue={selectedUF}>{uf.label}</option>
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
