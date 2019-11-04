import React, {useEffect, useState, } from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Distances from "./Distances/Distances";
import {useParams, useLocation} from "react-router";
import axios from "axios";
import {Helmet} from "react-helmet";

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

        if(corridaProps === ''){
        const cacheCorrida = sessionStorage.getItem(slug);
        if (cacheCorrida) {
            console.log('>>>>>>>>>>> leu as corrida do CACHE');
            const corrida = JSON.parse(cacheCorrida);
            setCorrida(corrida);
        } else {
            console.log('>>>>>>>>>>> leu as corridas do SERVER');
            getCorrida();
        }
        }else{
            console.log('>>>>>>>>>>> leu a corrida do props');
            setCorrida(corridaProps);
        }

    }, [slug, corridaProps]);

    return (
        <>

            <Helmet>
                <meta charSet="utf-8"/>
                <title>{`Corrida Urbana - Calendário - Corrida - ${corrida.titulo}`}</title>
                <meta name="description"
                      content={'Confira informações sobre a corrida ' + corrida.titulo + ' que irá acontecer em ' + corrida.endereco + '.'}/>
                <link rel="canonical" href={props.location.pathname}/>

                <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "${corrida.titulo}",
                    "description": "Confira informações sobre a corrida ${corrida.titulo} que irá acontecer em ${corrida.endereco}.",
                    "startDate": "${corrida.ano + '-' + corrida.mes + '-' + corrida.dia}",
                    "endDate": "${corrida.ano + '-' + corrida.mes + '-' + corrida.dia}",
                    "image": ["${corrida.imagem}"],
                    "location": {
                        "@type": "Place",
                        "name": "${corrida.endereco}",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "${corrida.endereco}",
                            "addressLocality": "${corrida.endereco}",
                            "addressRegion": "${corrida.uf}",
                            "addressCountry": "BR"
                        }
                    }               
                }
            `}</script>

            </Helmet>


            <div className="col">
                <div className="row">
                    {isLoading ?
                        (<div className="loader m-auto"></div>) :
                        (
                            <div className="col m-2">

                                <div className="row p-3">
                                    <div className="col-9 col-md-12 col-lg-9 p-0 curb-event-infos">
                                        <div className="row">
                                            <div className="col curb-event-title">{corrida.titulo}</div>

                                        </div>
                                        <div className="row">
                                            <div className="col curb-event-place">
                                                <FontAwesomeIcon icon="globe-americas"/>{corrida.local}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-12 col-lg-3 pl-0 curb-event-date">
                                        <div className="row">
                                            <div className="col text-right m-0 p-0"><span
                                                className="curb-event-day">{corrida.dia}</span><span
                                                className="curb-event-month">{corrida.mes}</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col text-right m-0 p-0 curb-event-year">{corrida.ano}</div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col mt-1">
                                        <Distances distances={distances}/>
                                    </div>
                                </div>
                                <div className="row curb-event-share-link p-2 m-1 mt-2">
                                    <div className="col-8 curb-event-share pl-0">
                                        <FontAwesomeIcon icon={['fab', 'whatsapp']}/>
                                        <FontAwesomeIcon icon={['fab', 'facebook']} className="mx-2"/>
                                        <FontAwesomeIcon icon="envelope"/>
                                    </div>
                                    <div className="col-4 text-right pr-0">
                                        <button className="curb-event-link p-1 px-2"><FontAwesomeIcon
                                            icon="info-circle"/> Infos
                                        </button>
                                    </div>
                                </div>
                            </div>)}
                </div>
            </div>
        </>
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
