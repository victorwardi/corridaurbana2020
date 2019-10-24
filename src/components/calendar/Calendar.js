import React, {useState, useEffect} from 'react';
import Corrida from "./Corrida/Corrida";
import axios from "axios";

const Calendar = (props) => {

    const [corridas, setCorridas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const response = await axios('https://www.corridaurbana.com.br/wp-json/calendario/estado/' + props.uf);
            setCorridas(response.data.corridas);
            setIsLoading(false);
        }

        fetchData();

    }, [props.uf]);


    return (
        <>
            <div className="row curb-calendar my-4">
                {isLoading ?
                    (<div className="loader m-auto"></div>) :
                    (
                        corridas.map(corrida => (
                            <Corrida key={corrida.id}
                                     title={corrida.titulo}
                                     data={corrida.data}
                                     distancias={corrida.distancias}
                            />))
                    )}
            </div>

        </>
    );
};

export default Calendar;
