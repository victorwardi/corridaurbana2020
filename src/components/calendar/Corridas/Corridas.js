import React from 'react';
import CorridaThumb from "../Corrida/CorridaThumb/CorridaThumb";
import classes from './Corridas.module.css';
import {Helmet} from "react-helmet";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Corridas = props => {

    const corridasList = [];
    props.corridas.map(corrida => {
        corridasList.push(<CSSTransition
            key={corrida.id}
            timeout={500}
            classNames="item"
        ><CorridaThumb key={corrida.id} corrida={corrida}/></CSSTransition>);
    });
    return (<>
        <Helmet>
            <title>{'Corrida Urbana - Calendário de Corridas de Rua do ' + props.uf.label + '.'}</title>
            <meta name="description"
                  content={'Confira o calendário de corridas do ' + props.uf.label + '.'}/>
            <link rel="canonical" href={'/calendario/' + props.uf.slug}/>
        </Helmet>

        {corridasList.length === 0 ? (<div className={classes.info}>Nenhuma corrida encontrada!</div>) : (

                <TransitionGroup className={classes.Corridas}>
                    {corridasList}
                </TransitionGroup>
           )}
    </>);
};


export default Corridas;
