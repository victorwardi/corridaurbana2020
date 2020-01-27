import React, {useEffect, useState} from 'react';
import classes from "./Banner.module.css";
import axios from "axios";

const Banner = () => {

    const [banner, setBanner] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        loadBanner();
    }, []);


    function loadBanner() {
        console.log('LOADING BANNER!')
        async function getBanner() {

            const response = await axios('/anuncios/v1/banner');
            setBanner(response.data);
            setIsLoaded(true);
        }

        getBanner().catch(error => {
            console.log("DEU  MERDA NO SERVER: " + error.message);
        });

    }



return (<div className={classes.container}>
    <div className={classes.banner}>
        {isLoaded &&  <a href={banner.url}>
            <img className={classes.desktop} src={banner.desktop} alt="publicidade"/>
            {/*<img className={classes.mobile} src={banner.mobile} alt="publicidade"/>*/}
        </a>
        }
    </div>
</div>);
}

export default Banner;
