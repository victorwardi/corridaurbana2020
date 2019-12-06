import React, {useState} from 'react';
import classes from './Search.module.css';
import ptBR from 'date-fns/locale/pt-BR';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";


const Search = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [ufSelected, setUfSelected] = useState(props.selectedUF.value);

    const selectHandler = (event)=>{
        setUfSelected(event.target.value);
    }

    return (

        <form noValidate autoComplete="off"  onSubmit={props.onSearchSubmit}>
            <div className={classes.container}>
                <div className={classes.textField}>
                    <TextField
                        name="search"
                        fullWidth={true}
                        id="search"
                        label="Corrida ou local"
                        margin="normal"
                        value={props.search}
                    />
                </div>
                <div className={classes.select}>
                     <FormControl className={classes.selectSize}>
                        <InputLabel id="ufSelectLabel">Estado</InputLabel>
                        <Select
                            labelId="ufSelectLabel"
                            id="ufSelect"
                            value={ufSelected}
                            onChange={selectHandler}
                        >
                            {props.ufs.map((uf, i) =><MenuItem key={i} value={uf.value}>{uf.label}</MenuItem>)}
                        </Select>
                         <input type="hidden" name="estado" value={ufSelected}/>
                    </FormControl>
                </div>
                <div className={classes.calendar}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR} >
                        <DatePicker

                            autoOk
                            disableToolbar
                            variant="inline"
                            label="Corrida a partir da data"
                            format="dd/MM/yyyy"
                            value={startDate}
                            onChange={date => setStartDate(date)}
                        />

                    </MuiPickersUtilsProvider>
                    <input type="hidden" name="since" readOnly value={startDate.getTime()}/>
                </div>
                <div><input className={classes.submit} type="submit" value="PROCURAR"/></div>

            </div>
        </form>);
};

export default Search;
