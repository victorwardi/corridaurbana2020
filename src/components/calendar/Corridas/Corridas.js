import React, {useMemo} from 'react';
import CorridaThumb from "../Corrida/CorridaThumb/CorridaThumb";
import classes from './Corridas.module.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Corridas = props => {
    console.log('CARREGADO AS CORRIDAS!')

        let corridasList = [];

        props.corridas.map(corrida => {
            corridasList.push(<CSSTransition
                key={corrida.id}
                timeout={500}
                classNames="item"
            ><CorridaThumb key={corrida.id} corrida={corrida}/></CSSTransition>);
        });
    return (<>


        {corridasList.length === 0 ? (<div className={classes.info}>Nenhuma corrida encontrada!</div>) :
                     <TransitionGroup className={classes.Corridas}>{corridasList}</TransitionGroup>}
    </>);
};


export default React.memo(Corridas);
