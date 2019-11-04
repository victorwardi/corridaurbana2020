import React from 'react';
import CorridaThumb from "../Corrida/CorridaThumb/CorridaThumb";
import classes from './Corridas.module.css';
import {Helmet} from "react-helmet";
const Corridas = props => {

    const corridas = [];
console.log(props)
    props.corridas.map(corrida => {
        corridas.push(<CorridaThumb key={corrida.id} corrida={corrida}/>);
    });

    return (
        <div className={classes.Corridas}>
            <Helmet>
            <title>{'Corrida Urbana - Calendário de Corridas de Rua do ' + props.uf + '.'}</title>
            <meta name="description"
                  content={'Confira o calendário de corridas do ' + props.uf + '.'}/>
            <link rel="canonical" href={'/calendario/' + props.uf}/>
            </Helmet>
            {corridas}
        </div>
    );
};


export default Corridas;
