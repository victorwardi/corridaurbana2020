import React from 'react';
import classes from './CorridaThumb.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Distances from "../Distances/Distances";
import {Link} from 'react-router-dom'
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
        <div className={classes.corrida} style={{borderColor: getUfImage(props.corrida.uf)}}>
            <Link to={{
                pathname: '/corrida/' + props.corrida.slug, state: {corrida: props.corrida}
            }}>

                    <div className={classes.date}>
                        <span className={classes.dia}>{props.corrida.dia}</span>
                        <span className={classes.mes}>{props.corrida.mesExtenso.substr(0, 3).toUpperCase()}</span>
                        <span className={classes.ano}>{props.corrida.ano}</span>
                    </div>
                    <div className={classes.info}>
                        {/*<div className={classes.flag} style={{background: getUfImage(props.corrida.uf)}}>{props.corrida.uf}</div>*/}
                        <div className={classes.title}>{props.corrida.titulo}</div>
                        <div className={classes.place}>
                            <FontAwesomeIcon icon="globe-americas"/>{props.corrida.cidade} - {props.corrida.uf}
                        </div>
                    </div>


                {/*<div className={classes.footer}>*/}
                {/*    <div className={classes.info}>+ MAIS INFORMAÇÕES</div>*/}
                {/*</div>*/}
            </Link>
            <SEOtags corrida={props.corrida}/>
        </div>


    </>);
};


export default CorridaThumb;
