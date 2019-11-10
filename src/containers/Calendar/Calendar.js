import React, {useMemo, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Corridas from "../../components/calendar/Corridas/Corridas";
import Pagination from "../../components/pagination/Pagination";

const Calendar = (props) => {


    let {slug} = useParams();
    let slugUF = '';
    if (slug !== undefined) {
        slugUF = slug;
    }

    const getUF = (slug) => {
        for (let i in props.ufs) {
            if (props.ufs[i].slug === slug) {
                return props.ufs[i];
            }
        }
    }

    let uf = getUF(slugUF);

    const [corridas, setCorridas] = useState([]);
    const [pagesTotal, setPagesTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    let {page} = useParams();
    if (page === undefined) {
        page = '1';
    }

    useMemo(() => {
        const cacheName = 'calendario-' + uf.slug + '-page-' + page;
        async function getCorridasEstado() {
            setIsLoading(true);
            const response = await axios('/calendario/' + uf.value + '?page=' + page);
            setCorridas(response.data.corridas);
            setPagesTotal(response.data.pages_total);
            sessionStorage.setItem(cacheName, JSON.stringify(response.data));
            setIsLoading(false);
        }

        const cacheCalendario = sessionStorage.getItem(cacheName);
        if (cacheCalendario) {
            console.log('>>>>>>>>>>> leu as corridas do CACHE');
            const json = JSON.parse(cacheCalendario);
            setCorridas(json.corridas);
            setPagesTotal(json.pages_total);
        } else {
            console.log('>>>>>>>>>>> leu as corridas do SERVER');
            getCorridasEstado();
        }

    }, [
        uf,
        page]);


    const corridasList = useMemo(() => {
        return <Corridas corridas={corridas} uf={uf}/>;
    }, [
        corridas,
        uf]);
    return (<>
            {isLoading ? <div className="loader"></div> : corridasList}
            <div>
                <Pagination url={'/calendario/' + (uf.slug !== '' ? uf.slug + '/' : '')} active={page} total={pagesTotal}/>
            </div>
        </>);
};

export default Calendar;
