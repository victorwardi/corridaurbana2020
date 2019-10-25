import React, {useState} from 'react';
import DatePicker, {setDefaultLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from 'date-fns/locale/pt-BR';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useHistory, useParams} from "react-router-dom";


setDefaultLocale(ptBR);

const Search = (props) => {

    const ufs = ['Todos', 'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
    const [selectedUF, setSelectedUF] = useState(ufs[0]);
    let { uf } = useParams();
    if(uf !== ''){
       //setSelectedUF({value: uf , label: uf});
      // setSelectedUF(ufs[6]);
    }


    const [startDate, setStartDate] = useState(new Date());

    let history = useHistory();

    const ufChangeHandler = (ufSelected) => {
        console.log(ufSelected.value);
        setSelectedUF(ufSelected);
        history.push('/calendario/' + ufSelected.value);
    }


    const ExampleCustomInput = ({ value, onClick }) => (
        <button className="form-control" onClick={onClick}>
            {value}
        </button>
    );

    return (
            <form onSubmit={props.handleCalendarSubmit}>
        <div className="row">
            <div className="col-6">
                <input type="text" className="form-control" placeholder="Corrida, local..."/>
            </div>
            <div className="col-2">
                <Dropdown options={ufs} onChange={ufChangeHandler} value={selectedUF} placeholder="Select an option" />
            </div>
            <div className="col-4">
                <DatePicker
                    dateFormat="P"
                    selected={startDate}
                    onChange={date => setStartDate(date)}

                />
                <input className="" type="submit" value="Submit" />
            </div>
        </div>
            </form>
    );
};

export default Search;
