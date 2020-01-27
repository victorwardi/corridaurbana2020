import React, {useEffect, useState, useCallback} from 'react';
import axios from "axios";
import Corridas from "../../components/calendar/Corridas/Corridas";
import ReadMore from "../../components/readMoreButton/ReadMoreButton";
import {getUfs, getUfBySlug} from '../../assets/ufs';
import {useHistory, useLocation, useParams} from "react-router";
import Search from "../../components/search/Search";
import {Helmet} from "react-helmet";
import queryString from 'query-string';
import Loader from "../../components/ui/loader/Loader";
import PageTitle from "../../components/pageTitle/PageTitle";

const Calendar = () => {
    console.log('LOADING CALENDAR')
    const CORRIDAS_PER_REQUEST = 15;
    let {ufParam} = useParams();
    const location = useLocation();
    const ufs = getUfs();

    const [uf, setUf] = useState( getUfBySlug(ufParam));
    const [corridas, setCorridas] = useState([]);
    const [pagesTotal, setPagesTotal] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMoreToRead, setHasMoreToRead] = useState(true);
    const [erro, setErro] = useState();

    let history = useHistory();

    const paramsUrl = queryString.parse(location.search);
    const searchURLparam = paramsUrl.search !== undefined ? paramsUrl.search : '';

    const [filters, setFilters] = useState({
        estado: uf.value,
        search: searchURLparam,
        since: new Date().getTime(),
        perpage: CORRIDAS_PER_REQUEST,
        page : 1
    });


    useEffect(() => {
        loadCorridas(filters);
    }, [uf]);


    async function getCorridasCache(cacheCalendario, filtersCorridas) {
        console.log('LOADING FROM CACHE');
        const json = JSON.parse(cacheCalendario);
        const corridasConcatened = corridas.concat(json.corridas);
        setCorridas(corridasConcatened);
        showMoreHandler(filtersCorridas, json.pages_total);
        setIsLoading(false);
    }

    const loadCorridas = (filtersCorridas) => {

        console.log('LOADING.....');
        setIsLoading(true); console.log('setState 1');
        setErro(false);console.log('setState 2');

        const cacheName = 'calendario-' + getFiltersQueryString(filtersCorridas);
        const cacheCalendario = sessionStorage.getItem(cacheName);

        if (cacheCalendario) {

            getCorridasCache(cacheCalendario, filtersCorridas).catch(error => {
                setErro(true);console.log('setState');
                console.log("DEU  MERDA NO CACHE: " + error.message)
            });

        } else {

            console.log('LOADING FROM SERVER : ' + '/calendario' + getFiltersQueryString(filtersCorridas) );

            async function getCorridasEstado() {

                const response = await axios('/corridas/v1/calendario' + getFiltersQueryString(filtersCorridas));

                if(response.data.corridas){
                    const corridasConcatened = corridas.concat(response.data.corridas);
                    setCorridas(corridasConcatened);console.log('setState');
                    showMoreHandler(filtersCorridas, response.data.pages_total);
                    sessionStorage.setItem(cacheName, JSON.stringify(response.data));
                }
                setIsLoading(false);

            }

            getCorridasEstado().catch(error => {
                setIsLoading(false);console.log('setState');
                setErro(error.message);console.log('setState');
                console.log("DEU  MERDA NO SERVER: " + error.message)
            });

        }


    };


    const showMoreHandler = (filtersSearch, totalPage) =>{

         if(filtersSearch.page >= totalPage){
            setHasMoreToRead(false);console.log('setState');
        }
        filtersSearch.page = filtersSearch.page + 1;


         const estadoURL =  ufs.filter(uf => uf.value === filtersSearch.estado)[0].slug;
         const searchURL = filtersSearch.search !== '' ?  '?search=' + filtersSearch.search : '';
         history.push('/calendario/' +  estadoURL +  searchURL);


        setFilters(filtersSearch);console.log('setState ');
        setPagesTotal(totalPage);console.log('setState');
    }

    const onSearchSubmit = (event) => {

        event.preventDefault();

        async function getCorridasSearch(filtersSearch) {
            setIsLoading(true);      console.log('setState');
            setHasMoreToRead(true);      console.log('setState');
            const urlSearch = '/corridas/v1/calendario' +  getFiltersQueryString(filtersSearch);
            const response = await axios(urlSearch);
            console.log( response.data)
            if(response.data.corridas){
                setCorridas(response.data.corridas);console.log('setState');
                showMoreHandler(filtersSearch, response.data.pages_total);
            }

            setIsLoading(false);console.log('setState loading to false');

        }




        const filtersSearch = {
            'search': event.target.search.value,
            'estado': event.target.estado.value,
            'since': event.target.since.value,
            'perpage': CORRIDAS_PER_REQUEST,
            'page' : 1
        };

        const cacheName = 'calendario-' + getFiltersQueryString(filtersSearch);
        const cacheCalendario = sessionStorage.getItem(cacheName);

        if (cacheCalendario) {

           getCorridasCache(cacheCalendario, filtersSearch).catch(error => {
                setErro(true);      console.log('setState');
                console.log("DEU  MERDA NO CACHE: " + error.message)
            });


        }else{

            getCorridasSearch(filtersSearch).catch(error => {
                setIsLoading(false);      console.log('setState');
                setErro(error.message);      console.log('setState');
                console.log("DEU  MERDA NO SERVER: " + error.message)
            });
        }


    }

    const getFiltersQueryString = (filters) => {
        return  '?' + Object.keys(filters).filter( key => filters[key] != '').map(key => key + '=' + filters[key]).join('&') ;
    }

    return (<>

        <Helmet>
            <title>{'Corrida Urbana - Calendário de Corridas de Rua do ' + uf.label + '.'}</title>
            <meta name="description"
                  content={'Confira o calendário de corridas do ' + uf.label + '.'}/>
            <link rel="canonical" href={'/calendario/' + uf.slug}/>
        </Helmet>
        <PageTitle title="Calendário de Corridas de Rua"/>
        <Search ufs={ufs} selectedUF={uf} search={searchURLparam} onSearchSubmit={onSearchSubmit}/>

        <Loader show={isLoading}/>
        {(isLoading && filters.page  == 1) ? '' : (erro ?
         <div className="error-msg">DESCULPE! NÃO FOI POSSÍVEL RECUPERAR AS CORRIDAS.</div> :
            <>
            <Corridas corridas={corridas} uf={uf}/>
                {hasMoreToRead && <ReadMore page={filters.page} pageTotal={pagesTotal} onClick={() => loadCorridas(filters)}/>}
            </>
                )}
    </>);
};

export default Calendar;
