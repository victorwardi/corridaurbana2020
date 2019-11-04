import React from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import Corrida from "../calendar/Corrida/Corrida";

const SEOtags = (props) => {
    return (


        <span itemScope itemType="http://schema.org/Event">
            <meta itemProp="name" content={props.corrida.titulo}/>
            <meta itemProp="description"
                  content={'Confira informações sobre a corrida' + props.corrida.titulo + ' que irá acontecer em ' + props.corrida.endereco + '.'}/>
            <meta itemProp="startDate"
                  content={props.corrida.ano + '-' + props.corrida.mes + '-' + props.corrida.dia}/>
            <meta itemProp="endDate" content={props.corrida.ano + '-' + props.corrida.mes + '-' + props.corrida.dia}/>
            <meta itemProp="image" content={props.corrida.imagem}/>

            <span itemProp="location" itemScope itemType="https://schema.org/Place">
                <meta itemProp="name" content={props.corrida.endereco}/>
                <meta itemProp="url" content={'/corrida/' + props.corrida.slug}/>
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <meta itemProp="addressLocality" content={props.corrida.endereco}/>
                    <meta itemProp="addressRegion" content={props.corrida.uf}/>
                    <meta itemProp="addressCountry" content="BR"/>
                </span>
            </span>
        </span>
    );
};
SEOtags.propTypes = {
    corrida: PropTypes.object
};
export default SEOtags;

