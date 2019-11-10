import React from 'react';
import CorridaThumb from "../Corrida/CorridaThumb/CorridaThumb";
import classes from './Corridas.module.css';
import {Helmet} from "react-helmet";

const Corridas = props => {

        const corridasList = [];
        props.corridas.map(corrida => {
            corridasList.push(<CorridaThumb key={corrida.id} corrida={corrida}/>);
        });
        return (
            <>
                <Helmet>
                    <title>{'Corrida Urbana - Calendário de Corridas de Rua do ' + props.uf.label + '.'}</title>
                    <meta name="description"
                          content={'Confira o calendário de corridas do ' + props.uf.label + '.'}/>
                    <link rel="canonical" href={'/calendario/' + props.uf.slug}/>
                </Helmet>

                { corridasList.length === 0 ? (<div className={classes.info}>Nenhuma corrida encontrada!</div>)
                        : (<div className={classes.Corridas}>{corridasList}</div>) }
            </>
        );
    }
;


export default Corridas;
