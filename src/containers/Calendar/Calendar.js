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

const Calendar = () => {
    console.log('CALANDAR!')
    const CORRIDAS_PER_REQUEST = 15;

    let {ufParam} = useParams();
    const location = useLocation();
    const ufs = getUfs();

    console.log("UF:")
    console.log(getUfBySlug(ufParam));

    const [uf, setUf] = useState( getUfBySlug(ufParam));
    const [corridas, setCorridas] = useState([]);
    const [pagesTotal, setPagesTotal] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMoreToRead, setHasMoreToRead] = useState(true);
    const [erro, setErro] = useState();
    let history = useHistory();

    const paramsUrl = queryString.parse(location.search);
    const searchURLparam = paramsUrl.search !== undefined ? paramsUrl.search : '';
    console.log('SEARCH: ' + searchURLparam);

    const [filters, setFilters] = useState({
        estado: uf.value,
        search: searchURLparam,
        since: new Date().getTime(),
        perpage: CORRIDAS_PER_REQUEST,
        page : 1
    });


    useEffect(() => {
        console.log("UF CARREGADA!: " + uf.slug);
        loadCorridas(filters);
    }, [
        uf]);




    const loadCorridas = (filtersCorridas) => {

        console.log('LOADING.....');
        setIsLoading(true);
        setErro(false);

        const cacheName = 'calendario-' + getFiltersQueryString(filtersCorridas);
        const cacheCalendario = sessionStorage.getItem(cacheName);

        if (cacheCalendario) {

            async function getCorridasCache() {
                console.log('LOADING FROM CACHE');
                const json = JSON.parse(cacheCalendario);
                const corridasConcatened = corridas.concat(json.corridas);
                setCorridas(corridasConcatened);
                console.log('TOTAL PAGES CACHE: ' + json.pages_total);
                showMoreHandler(filtersCorridas, json.pages_total);
                setIsLoading(false);
            }

            getCorridasCache().catch(error => {
                setErro(true);
                console.log("DEU  MERDA NO CACHE: " + error.message)
            });

        } else {

            console.log('LOADING FROM SERVER : ' + '/calendario' + getFiltersQueryString(filtersCorridas) );

            async function getCorridasEstado() {

                const response = await axios('/calendario' + getFiltersQueryString(filtersCorridas));

                if(response.data.corridas){
                    const corridasConcatened = corridas.concat(response.data.corridas);
                    setCorridas(corridasConcatened);
                    showMoreHandler(filtersCorridas, response.data.pages_total);
                    sessionStorage.setItem(cacheName, JSON.stringify(response.data));
                }
                setIsLoading(false);

            }

            getCorridasEstado().catch(error => {
                setIsLoading(false);
                setErro(error.message);
                console.log("DEU  MERDA NO SERVER: " + error.message)
            });

        }


    };


    const showMoreHandler = (filtersSearch, totalPage) =>{

         if(filtersSearch.page >= totalPage){
            setHasMoreToRead(false);
        }
        filtersSearch.page = filtersSearch.page + 1;


         const estadoURL =  ufs.filter(uf => uf.value === filtersSearch.estado)[0].slug;
         const searchURL = filtersSearch.search !== '' ?  '?search=' + filtersSearch.search : '';
         history.push('/calendario/' +  estadoURL +  searchURL);


        setFilters(filtersSearch)
        setPagesTotal(totalPage);
    }

    const onSearchSubmit = (event) => {

        event.preventDefault();

        async function getCorridasSearch(filtersSearch) {

            console.log('filtersSearch');
            console.log( getFiltersQueryString(filtersSearch));

            const urlSearch = '/calendario' +  getFiltersQueryString(filtersSearch);

            console.log( 'BUSCANDO POR: ' + urlSearch);

            const response = await axios(urlSearch);
            console.log( response.data)
            if(response.data.corridas){
                setCorridas(response.data.corridas);
                showMoreHandler(filtersSearch, response.data.pages_total);
            }

            setIsLoading(false);

        }

        setIsLoading(true);
        setHasMoreToRead(true);

        const filtersSearch = {
            'search': event.target.search.value,
            'estado': event.target.estado.value,
            'since': event.target.since.value,
            'perpage': CORRIDAS_PER_REQUEST,
            'page' : 1
        };

        getCorridasSearch(filtersSearch).catch(error => {
            setIsLoading(false);
            setErro(error.message);
            console.log("DEU  MERDA NO SERVER: " + error.message)
        });
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
