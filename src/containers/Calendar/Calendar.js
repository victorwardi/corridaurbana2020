import React, {useMemo, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Corridas from "../../components/calendar/Corridas/Corridas";
import Pagination from "../../components/pagination/Pagination";

const Calendar = (props) => {
    let {uf} = useParams();
    let {page} = useParams();
    if(page === undefined){
        page = 1;
    }
    const url_base = '/calendario/' + uf;


    const [corridas, setCorridas] = useState([]);
    const [pagesTotal, setPagesTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useMemo(() => {
        const cacheName = url_base + '/' + page;
        async function getCorridasEstado() {
            console.log('REQUEST: https://www.corridaurbana.com.br/wp-json/calendario/estado/' + uf + '?page=' + page);
            setIsLoading(true);
            const response = await axios('https://www.corridaurbana.com.br/wp-json/calendario/estado/' + uf + '?page=' + page);
            setCorridas(response.data.corridas);
            setPagesTotal(response.data.pages_total);
            sessionStorage.setItem(cacheName, JSON.stringify(response.data));
            setIsLoading(false);
        }

      const cacheCalendario =   sessionStorage.getItem(cacheName);
       if(cacheCalendario){
           console.log('>>>>>>>>>>> leu as corridas do CACHE');
           const json = JSON.parse(cacheCalendario);
           setCorridas(json.corridas);
           setPagesTotal(json.pages_total);
       }else{
           console.log('>>>>>>>>>>> leu as corridas do SERVER');
           getCorridasEstado();
       }

    }, [url_base, uf, page]);


const corridasList = useMemo(() => {
 console.log(corridas);
    return <Corridas corridas={corridas} uf={uf}/>;
}, [corridas, uf]);
    return (
        <>

                {isLoading ? <div className="loader m-auto"></div> : corridasList }

            <div>
                <Pagination url={url_base} active={page} total={pagesTotal}/>
            </div>
        </>
    );
};

export default Calendar;
