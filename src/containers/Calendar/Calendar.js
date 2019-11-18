import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import {useHistory, useParams} from "react-router";
import Corridas from "../../components/calendar/Corridas/Corridas";
import Search from "../../components/search/Search";
import ReadMore from "../../components/readMoreButton/ReadMoreButton";

const Calendar = (props) => {

    const ufs = [
        {
            label: "Todos", value: "todos", slug: "br"
        },
        {
            label: "Acre", value: "AC", slug: "acre"
        },
        {
            label: "Alagoas", value: "AL", slug: "alagoas"
        },
        {
            label: "Amapá", value: "AP", slug: "amapa"
        },
        {
            label: "Amazonas", value: "AM", slug: "amazonas"
        },
        {
            label: "Bahia", value: "BA", slug: "bahia"
        },
        {
            label: "Ceará", value: "CE", slug: "ceara"
        },
        {
            label: "Distrito Federal", value: "DF", slug: "distrito-federal"
        },
        {
            label: "Espírito Santo", value: "ES", slug: "espirito-santo"
        },
        {
            label: "Goiás", value: "GO", slug: "goias"
        },
        {
            label: "Maranhão", value: "MA", slug: "maranhao"
        },
        {
            label: "Mato Grosso", value: "MT", slug: "mato-grosso"
        },
        {
            label: "Mato Grosso do Sul", value: "MS", slug: "mato-grosso-do-sul"
        },
        {
            label: "Minas Gerais", value: "MG", slug: "minas-gerais"
        },
        {
            label: "Paraná", value: "PR", slug: "parana"
        },
        {
            label: "Paraíba", value: "PB", slug: "paraiba"
        },
        {
            label: "Paraná", value: "PA", slug: "parana"
        },
        {
            label: "Pernambuco", value: "PE", slug: "pernambuco"
        },
        {
            label: "Piauí", value: "PI", slug: "piaui"
        },
        {
            label: "Rio Grande do Norte", value: "RN", slug: "rio -grande-do-norte"
        },
        {
            label: "Rio Grande do Sul", value: "RS", slug: "rio-grande-do-sul"
        },
        {
            label: "Rio de Janeiro", value: "RJ", slug: "rio-de-janeiro"
        },
        {
            label: "Rondânia", value: "RO", slug: "rondonia"
        },
        {
            label: "Roraima", value: "RR", slug: "roraima"
        },
        {
            label: "Santa Catarina", value: "SC", slug: "santa-catarina"
        },
        {
            label: "Sergipe", value: "SE", slug: "sergipe"
        },
        {
            label: "São Paulo", value: "SP", slug: "sao-paulo"
        },
        {
            label: "Tocantins", value: "TO", slug: "tocantins"
        }];

    let {slug} = useParams();
    slug = slug === undefined ? 'br' : slug;
    let {page} = useParams();
    page = page === undefined ? '1' : page;


    const [pageMore, setPageMore] = useState(2);
    const [uf, setUf] = useState(ufs.filter(uf => uf.slug === slug)[0]);
    console.log('CALENDAR - ' + uf.label.toString().toUpperCase())
    const [corridas, setCorridas] = useState([]);
    const [pagesTotal, setPagesTotal] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    function loadCorridas() {
        const cacheName = 'calendario-' + uf.slug + '-page-' + page;

        const cacheCalendario = sessionStorage.getItem(cacheName);

        if (cacheCalendario) {
            console.log('CACHE');
            const json = JSON.parse(cacheCalendario);
            setCorridas(json.corridas);
            setPagesTotal(json.pages_total);

        } else {
            console.log('SERVER');

            async function getCorridasEstado() {
                setIsLoading(true);
                const response = await axios('/calendario/' + uf.value + '?page=' + page);
                setCorridas(response.data.corridas);
                setPagesTotal(response.data.pages_total);
                sessionStorage.setItem(cacheName, JSON.stringify(response.data));
                setIsLoading(false);

            }

            getCorridasEstado().catch(error => {
                console.log(error);
            });

        }
    }

    useEffect(() => {

        loadCorridas();

    }, [
        uf,
        page]);


    const corridasList = useMemo(() => {
        console.log("LISTA CORRIDAS");
        return <Corridas corridas={corridas} uf={uf}/>;
    }, [
        corridas,
        uf]);

    let history = useHistory();
    const ufChangeHandler = (event) => {
        const ufSelectedCombo = ufs.filter(uf => uf.value === event.target.value)[0];
        console.log('/calendario/' + ufSelectedCombo.slug);
        setUf(ufSelectedCombo);
        history.push('/calendario/' + ufSelectedCombo.slug);
    }

    function readMore() {
        console.log('READ MORE CLICKED!');
        console.log(uf);

        const cacheName = 'calendario-' + uf.slug + '-page-' + pageMore;
        console.log('CACHE NAME: ' + cacheName);
        const cacheCalendario = sessionStorage.getItem(cacheName);

        if (cacheCalendario) {
            setIsLoadingMore(true);
            console.log('CACHE');
            const json = JSON.parse(cacheCalendario);
            console.log(json);
            const moreCorridas = json.corridas;
            console.log('Carregando mais corridas: ' + moreCorridas.length)
            console.log(moreCorridas);

            const listCorridas = corridas;
            console.log('lista original: ' + listCorridas.length);
            console.log(listCorridas);

            const listaConcat = listCorridas.concat(moreCorridas);
            console.log('lista CONCAT: ' + listaConcat.length);
            console.log(listaConcat);

            setCorridas(listaConcat);
            setPagesTotal(json.pages_total);
            setPageMore(pageMore + 1);

            setIsLoadingMore(false);
        } else {
            console.log('SERVER');

            async function getCorridasEstado() {
                setIsLoadingMore(true);
                const response = await axios('/calendario/' + uf.value + '?page=' + pageMore);
                const moreCorridas = response.data.corridas;
                console.log('Carregando mais corridas: ' + moreCorridas.length)
                console.log(moreCorridas);

                const listCorridas = corridas;
                console.log('lista original: ' + listCorridas.length);
                console.log(listCorridas);

                const listaConcat = listCorridas.concat(moreCorridas);
                console.log('lista CONCAT: ' + listaConcat.length);
                console.log(listaConcat);

                setCorridas(listaConcat);
                sessionStorage.setItem(cacheName, JSON.stringify(response.data));
                setIsLoadingMore(false);
                setPageMore(pageMore + 1);
            }

            getCorridasEstado().catch(error => {
                console.log(error);
            });

        }

    }

    return (<>
        <Search ufs={ufs} selectedUF={uf} ufChangeHandler={ufChangeHandler}/>
        {isLoading ? <div className="loader"></div> : corridasList}
        <div>
            {(pagesTotal > 1 && page < pagesTotal) ? <ReadMore onClick={readMore} isLoading={isLoadingMore}/> : ''}

        </div>
    </>);
};

export default Calendar;
