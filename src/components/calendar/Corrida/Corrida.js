import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Distances from "./Distances/Distances";

const Corrida = props => {

    let distances = '';
    if (props.distancias !==  undefined) {
        distances = <Distances distances={props.distancias} />;
    }

    return (
        <>
            <div className="col-12 col-md-4">
                <div className="row">
                    <div className="col m-2 curb-event">
                        <div className="row p-3">
                            <div className="col-9 col-md-12 col-lg-9 p-0 curb-event-infos">
                                <div className="row">
                                    <div className="col curb-event-title">{props.title} {props.data}</div>
                                </div>
                                <div className="row">
                                    <div className="col curb-event-place">
                                        <FontAwesomeIcon icon="globe-americas" />Rio de Janeiro - RJ
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 col-md-12 col-lg-3 pl-0 curb-event-date">
                                <div className="row">
                                    <div className="col text-right m-0 p-0"><span
                                        className="curb-event-day">26</span><span
                                        className="curb-event-month"> out</span></div>
                                </div>
                                <div className="row">
                                    <div className="col text-right m-0 p-0 curb-event-year">2019</div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col mt-1">
                                {distances}
                            </div>
                        </div>
                        <div className="row curb-event-share-link p-2 m-1 mt-2">
                            <div className="col-8 curb-event-share pl-0">
                                <FontAwesomeIcon icon={['fab', 'whatsapp']}/>
                                <FontAwesomeIcon icon={['fab', 'facebook']} className="mx-2"/>
                                <FontAwesomeIcon icon="envelope"/>
                            </div>
                            <div className="col-4 text-right pr-0">
                                <button className="curb-event-link p-1 px-2"><FontAwesomeIcon icon="info-circle"/> Infos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Corrida.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.string,
    place: PropTypes.string,
    link: PropTypes.string,
    dia: PropTypes.string,
    mes: PropTypes.string,
    ano: PropTypes.string,
    mesExtenso:PropTypes.string,
    data: PropTypes.string,
    horario: PropTypes.string,
    cidade: PropTypes.string,
    estado:PropTypes.string,
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
