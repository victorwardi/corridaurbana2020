import React from 'react';
import {Helmet} from "react-helmet";
import classes from './CorridaInfos.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Distances from "../Distances/Distances";
import PropTypes from 'prop-types';

const CorridaInfos = (props) => {

    const API_KEY = 'AIzaSyBWbx-asZFkX_6C4zhauBRvEc0CZUs6TnQ';
     const place = props.corrida.endereco;

    const map = 'https://maps.googleapis.com/maps/api/staticmap?center='+place+'&zoom=12&size=640x400&scale=2&maptype=roadmap&key=' + API_KEY;
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

            <div className={classes.title}>
                <h1>{props.corrida.titulo}</h1>
            </div>
            <div className={classes.place}>
                <FontAwesomeIcon icon="globe-americas"/> {props.corrida.cidade} - {props.corrida.uf}
            </div>
            <div className={classes.date}>
                <FontAwesomeIcon  icon={['far', 'calendar']}/>{props.corrida.dia}/{props.corrida.mes}/{props.corrida.ano}
            </div>
            <div className={classes.horario}>
                <FontAwesomeIcon  icon={['far', 'clock']}/> {props.corrida.horario}
            </div>
            <div className={classes.place}>
                <FontAwesomeIcon icon="globe-americas"/> {props.corrida.endereco}
            </div>
            <div className={classes.mapa}>
                <img src={map} alt=""/>
            </div>
            <div className={classes.distances}>
                <div><FontAwesomeIcon icon="globe-americas"/><b>Distâncias</b></div>
                <Distances distances={props.corrida.distancias}/>
            </div>
            <div className={classes.footer}>
                <div className={classes.share}>
                    <FontAwesomeIcon icon={['fab', 'whatsapp']}/>
                    <FontAwesomeIcon icon={['fab', 'facebook']} className="mx-2"/>
                    <FontAwesomeIcon icon="envelope"/>
                </div>
                <div className={classes.link}>
                    <a href={props.corrida.site}>Site oficial para inscrição</a>
                </div>
            </div>


        </div>
    );
};



export default CorridaInfos;
