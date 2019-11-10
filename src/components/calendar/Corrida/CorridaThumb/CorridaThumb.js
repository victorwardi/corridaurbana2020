import React from 'react';
import classes from './CorridaThumb.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Distances from "../Distances/Distances";
import {Link} from 'react-router-dom'
import SEOtags from "../../../SeoMetas/SeoTags";

const CorridaThumb = props => {

    const getUfImage = (uf) => {
        let colors;
        switch (uf.toString().toUpperCase()) {
            case 'RJ' :
                colors = ['#1abc9c', '#005c5f'];
                break;
            case 'SP' :
                colors = ['#2ba3ff', '#15416a'];
                break;
            case 'MG' :
                colors = ['#ff64a2', '#cf1755'];
                break;
            case 'BA' :
                colors = ['#ff920b', '#ff4d00'];
                break;
            case 'MS' :
                colors = ['#8e8bbc', '#36084a'];
                break;
            case 'SC' :
                colors = ['#66ff21', '#20380b'];
                break;
            case 'RS' :
                colors = ['#fffaa6', '#ff920b'];
                break;
            default :
                colors = ['#adb7c2', '#3c4047'];
        }
        console.log(colors)
        return 'linear-gradient(to top right, ' + colors[0] + ', ' + colors[1] + ' )';
    }


    return (
        <>
            <div className={classes.corrida}>
                <Link to={{
                    pathname: '/corrida/' + props.corrida.slug,
                    state: {corrida: props.corrida}
                }}>
                    <div className={classes.image} style={{backgroundImage: getUfImage(props.corrida.uf)}}>
                        <div className={classes.title}>{props.corrida.titulo}</div>
                        <span className={classes.uf}>{props.corrida.uf}</span>
                    </div>
                    <div className={classes.date}>
                        {props.corrida.dia}, {props.corrida.mesExtenso.substr(0, 3)} {props.corrida.ano}
                    </div>

                    <div className={classes.place}>
                        <FontAwesomeIcon icon="globe-americas"/>{props.corrida.cidade} -{props.corrida.uf}
                    </div>
                    <div className={classes.distances}>
                        <Distances distances={props.corrida.distancias}/>
                    </div>
                    <div className={classes.footer}>
                        <FontAwesomeIcon icon={['fab', 'whatsapp']}/>
                        <FontAwesomeIcon icon={['fab', 'facebook']} className="mx-2"/>
                        <FontAwesomeIcon icon="envelope"/>
                    </div>

                </Link>
                <SEOtags corrida={props.corrida}/>
            </div>


        </>
    );
};


export default CorridaThumb;
