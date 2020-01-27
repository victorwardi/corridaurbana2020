import React from 'react';
import classes from './CorridaThumb.module.css';
import {Link} from 'react-router-dom'
import square from '../../../../assets/images/square.png';
import SEOtags from "../../../SeoMetas/SeoTags";

const CorridaThumb = (props) => {

    const getUfImage = (uf) => {
        let colors;
        switch (uf.toString().toUpperCase()) {
            case 'RJ' :
                colors = [
                    '#1abc9c',
                    '#005c5f'];
                break;
            case 'SP' :
                colors = [
                    '#2ba3ff',
                    '#15416a'];
                break;
            case 'MG' :
                colors = [
                    '#ff64a2',
                    '#cf1755'];
                break;
            case 'BA' :
                colors = [
                    '#ff920b',
                    '#ff4d00'];
                break;
            case 'MS' :
                colors = [
                    '#8e8bbc',
                    '#36084a'];
                break;
            case 'SC' :
                colors = [
                    '#66ff21',
                    '#20380b'];
                break;
            case 'RS' :
                colors = [
                    '#fffaa6',
                    '#ff920b'];
                break;
            default :
                colors = [
                    '#adb7c2',
                    '#3c4047'];
        }

        //return 'linear-gradient(to bottom, ' + colors[0] + ', ' + colors[1] + ' )';
        return colors[0];
    }


    return (<>
        {/*style={{borderColor: getUfImage(props.corrida.uf)}}*/}
            <div className={classes.corrida}>
                <Link to={{
                    pathname: '/corrida/' + props.corrida.slug, state: {corrida: props.corrida}
                }}><div className={classes.containerCorrida}>

                    <img className={classes.square} src={square}/>
                    <div className={classes.infos}>
                        <h4 className={classes.date}>{props.corrida.dia} / {props.corrida.mesExtenso.substr(0, 3).toUpperCase()}, {props.corrida.ano}</h4>
                        <h2 className={classes.title}>{props.corrida.titulo}</h2>
                        <h3 className={classes.place}>{props.corrida.cidade} - {props.corrida.uf}</h3>
                    <div className={classes.more}>Veja Mais</div>
                    </div>
                </div>
                </Link>
                <SEOtags corrida={props.corrida}/>
            </div>


        </>);
};


export default CorridaThumb;
