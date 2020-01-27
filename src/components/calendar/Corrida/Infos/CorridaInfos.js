import React from 'react';
import {Helmet} from "react-helmet";
import classes from './CorridaInfos.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Distances from "../Distances/Distances";
import PropTypes from 'prop-types';
import PageTitle from "../../../pageTitle/PageTitle";

const CorridaInfos = (props) => {

    const API_KEY = 'AIzaSyBWbx-asZFkX_6C4zhauBRvEc0CZUs6TnQ';
    const place = props.corrida.endereco;

    const map = 'https://maps.googleapis.com/maps/api/staticmap?center=' + place + '&zoom=12&size=640x400&scale=2&maptype=roadmap&key=' + API_KEY;
    return (<div>
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
            <PageTitle title={props.corrida.titulo}/>

            <div className={classes.CorridaInfos}>
                <div className={classes.info}>
                    <div className={classes.label}><FontAwesomeIcon icon="globe-americas"/> Local</div>
                    <div className={classes.value}>{props.corrida.cidade} - {props.corrida.uf}</div>
                </div>

                <div className={classes.info}>
                    <div className={classes.label}><FontAwesomeIcon icon={[
                        'far',
                        'calendar']}/> Data</div>
                    <div className={classes.value}>{props.corrida.dia}/{props.corrida.mes}/{props.corrida.ano}</div>
                </div>

                <div className={classes.info}>
                    <div className={classes.label}><FontAwesomeIcon icon={[
                        'far',
                        'clock']}/> Horário</div>
                    <div className={classes.value}>{props.corrida.horario}</div>
                </div>

                <div className={classes.info}>
                    <div className={classes.label}><FontAwesomeIcon icon="globe-americas"/> Endereço</div>
                    <div className={classes.value}>{props.corrida.endereco}</div>
                </div>

                <div className={classes.info}>
                    <div className={classes.label}><FontAwesomeIcon icon="globe-americas"/> Distâncias</div>
                    <div className={classes.value}><Distances distances={props.corrida.distancias}/></div>
                </div>

                <div className={classes.info}>
                    <div className={classes.label}>Atenção</div>
                    <div className={classes.value}>
                        O site Corrida Urbana não organiza qualquer tipo de evento/corrida e não se responsabiliza por qualquer alteração ou divergência de informação.
                        Sempre verifique no <a href={props.corrida.site}>site oficial do evento</a> antes de se inscrever.
                    </div>
                </div>

                <div className={classes.info}>
                    <div className={classes.label}><FontAwesomeIcon icon="globe-americas"/> Site Oficial</div>
                    <div className={classes.value}><a href={props.corrida.site}>CLIQUE AQUI PARA SE INSCREVER</a></div>
                </div>

                <div className={classes.info}>
                    <div className={classes.label}><FontAwesomeIcon icon="globe-americas"/> Compartilhe</div>
                    <div className={classes.value}>
                        <FontAwesomeIcon icon={[
                            'fab',
                            'whatsapp']}/>
                        <FontAwesomeIcon icon={[
                            'fab',
                            'facebook']} className="mx-2"/>
                        <FontAwesomeIcon icon="envelope"/>
                    </div>
                </div>
            </div>

        </div>

    );
};


export default CorridaInfos;
