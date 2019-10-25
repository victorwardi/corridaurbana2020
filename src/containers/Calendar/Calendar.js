import React, {useState, useEffect} from 'react';
import Corrida from "../../components/calendar/Corrida/Corrida";
import axios from "axios";
import CorridaThumb from "../../components/calendar/Corrida/CorridaThumb/CorridaThumb";
import {useParams} from "react-router-dom";

const Calendar = (props) => {



    let {uf} = useParams();
    const [corridas, setCorridas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const response = await axios('https://www.corridaurbana.com.br/wp-json/calendario/estado/' + uf);
            setCorridas(response.data.corridas);
            setIsLoading(false);
        }

        fetchData();

    }, [uf]);


    return (
        <>
            <div className="row curb-calendar my-4">
                {isLoading ?
                    (<div className="loader m-auto"></div>) :
                    (
                        corridas.map(corrida => {

                            let distances = [];
                            if (corrida.distancias !== undefined) {
                                distances = corrida.distancias;
                            }

                            return <CorridaThumb key={corrida.id}
                                                 title={corrida.titulo}
                                                 data={corrida.data}
                                                 distancias={distances}
                            />
                        })
                    )}
            </div>


        </>
    );
};

export default Calendar;
