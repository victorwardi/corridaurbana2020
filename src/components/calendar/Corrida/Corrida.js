import React, {useEffect, useState,} from 'react';
import classes from './Corrida.module.css';
import PropTypes from 'prop-types';
import {useParams} from "react-router";
import axios from "axios";
import CorridaInfos from "./Infos/CorridaInfos";

const Corrida = props => {
    console.log('CORRIDA');
    let {slug} = useParams();

    //   console.log(location.state.corrida);
    const [corrida, setCorrida] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [distances, setDistances] = useState([]);
    const corridaProps = props.location.state !== undefined ? props.location.state.corrida : '';
    useEffect(() => {
        async function getCorrida() {
            setIsLoading(true);
            const response = await axios('https://www.corridaurbana.com.br/wp-json/calendario/corrida/' + slug);
            console.log(response.data);
            setCorrida(response.data);
            if (response.data.distancias !== undefined) {
                setDistances(response.data.distancias);
            }
            sessionStorage.setItem(slug, JSON.stringify(response.data));
            setIsLoading(false);

        }

        if (corridaProps === '') {
            const cacheCorrida = sessionStorage.getItem(slug);
            if (cacheCorrida) {
                console.log('>>>>>>>>>>> leu as corrida do CACHE');
                const corrida = JSON.parse(cacheCorrida);
                setCorrida(corrida);
            } else {
                console.log('>>>>>>>>>>> leu as corridas do SERVER');
                getCorrida();
            }
        } else {
            console.log('>>>>>>>>>>> leu a corrida do props');
            setCorrida(corridaProps);
        }

    }, [slug, corridaProps]);

    return (
        <div className={classes.Corrida}>
            <div className={classes.infos}>
                {isLoading ? <div className="loader m-auto"></div> :
                    <CorridaInfos corrida={corrida} distances={distances} url={props.location.pathname}/>
                }
            </div>
            <div className={classes.banner}>

            </div>

        </div>
    );
};

Corrida.propTypes = {
    titulo: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.string,
    place: PropTypes.string,
    link: PropTypes.string,
    dia: PropTypes.string,
    mes: PropTypes.string,
    ano: PropTypes.string,
    mesExtenso: PropTypes.string,
    data: PropTypes.string,
    horario: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    uf: PropTypes.string,
    local: PropTypes.string,
    endereco: PropTypes.string,
    distancias: PropTypes.array,
    site: PropTypes.string,
    mapa: PropTypes.string,
    valor: PropTypes.string,
    imagem: PropTypes.string

};

export default Corrida;
