import React from 'react';
import classes from './CorridaThumb.module.css';
import './CorridaThumb.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Distances from "../Distances/Distances";
import {Link} from 'react-router-dom'
import SEOtags from "../../../SeoMetas/SeoTags";

const CorridaThumb = props => {

    let distancias = [];
    if (props.corrida.distancias !== undefined) {
        distancias = props.corrida.distancias;
    }

    const generatePaleteColor = () =>{
        const palete = [
        ['Turquoise', 'Teal'],
        ['Orange', 'Gold'],
        ['DodgerBlue', 'SkyBlue'],
        ['DarkRed', 'LightPink'],
        ['Salmon', 'LightSalmon']
        ]
        return palete[Math.round((Math.random() * 1))];
    };


    const generateRandomColor = () =>{
        let r = Math.round((Math.random() * 255)); //red 0 to 255
        let g = Math.round((Math.random() * 255)); //green 0 to 255
        let b = Math.round((Math.random() * 255)); //blue 0 to 255
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    };

    const generateBackgroundGradient = () =>{

        const palete = generatePaleteColor();
        return 'radial-gradient(circle at top left, ' + palete[1] + ', '+ palete[0] + ')';


    }

    return (
        <>
                <div className={classes.corrida} >
                    <Link to={{
                        pathname: '/corrida/' + props.corrida.slug,
                        state: {corrida: props.corrida}
                    }}>
                    <div className={classes.image} style={{backgroundImage: generateBackgroundGradient()}}>
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
                        <Distances distances={distancias}/>
                    </div>
                    <div className={classes.share}>
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
