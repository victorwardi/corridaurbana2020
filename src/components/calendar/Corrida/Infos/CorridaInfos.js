import React from 'react';
import {Helmet} from "react-helmet";
import classes from './CorridaInfos.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Distances from "../Distances/Distances";
import PropTypes from 'prop-types';
import Layout from "../../../../containers/Layout";

const CorridaInfos = (props) => {
    return (
        <div className={classes.CorridaInfos}>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{`Corrida Urbana - Calendário - Corrida - ${props.corrida.titulo}`}</title>
                <meta name="description"
                      content={'Confira informações sobre a corrida ' + props.corrida.titulo + ' que irá acontecer em ' + props.corrida.endereco + '.'}/>
                <link rel="canonical" href={props.url}/>

                <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "${props.corrida.titulo}",
                    "description": "Confira informações sobre a corrida ${props.corrida.titulo} que irá acontecer em ${props.corrida.endereco}.",
                    "startDate": "${props.corrida.ano + '-' + props.corrida.mes + '-' + props.corrida.dia}",
                    "endDate": "${props.corrida.ano + '-' + props.corrida.mes + '-' + props.corrida.dia}",
                    "image": ["${props.corrida.imagem}"],
                    "location": {
                        "@type": "Place",
                        "name": "${props.corrida.endereco}",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "${props.corrida.endereco}",
                            "addressLocality": "${props.corrida.endereco}",
                            "addressRegion": "${props.corrida.uf}",
                            "addressCountry": "BR"
                        }
                    }               
                }
            `}</script>
            </Helmet>

            <div className="titulo">
               <h1>{props.corrida.titulo}</h1>
            </div>
            <div className="data">
                {props.corrida.dia}/{props.corrida.mes}/{props.corrida.ano}
            </div>
            <div className="local">
                <FontAwesomeIcon icon="globe-americas"/>{props.corrida.endereco}
            </div>
            <div className="distances">
                <Distances distances={props.distances}/>
            </div>

            <div className="share">
                <FontAwesomeIcon icon={['fab', 'whatsapp']}/>
                <FontAwesomeIcon icon={['fab', 'facebook']} className="mx-2"/>
                <FontAwesomeIcon icon="envelope"/>
            </div>


        </div>
    );
};

CorridaInfos.propTypes = {
    corrida: PropTypes.object,
    distances: PropTypes.array
};

export default CorridaInfos;
