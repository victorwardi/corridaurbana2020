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
import Nav from "../../containers/Menu/Nav";

const Search = (props) => {

    const [startDate, setStartDate] = useState(new Date());


    return (

        <form noValidate autoComplete="off">
            <div className={classes.container}>
                <div className={classes.textField}>
                    <TextField
                        fullWidth={true}
                        id="standard-basic"
                        label="Corrida ou local"
                        margin="normal"
                    />
                </div>
                <div className={classes.select}>
                     <FormControl className={classes.selectSize}>
                        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.selectedUF.value}
                            onChange={props.ufChangeHandler}
                        >
                            {props.ufs.map((uf, i) =><MenuItem value={uf.value}>{uf.label}</MenuItem>)}
                        </Select>
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
                </div>
                <div><input className={classes.submit} type="submit" value="Submit"/></div>

            </div>
        </form>);
};

export default Search;
