import React, {useEffect} from 'react';
import classes from './Adsense.module.css';
const Adsense = (props) => {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (<div className={classes.ad}>
        <ins className={'adsbygoogle ' +  classes.example_responsive_1}
             style={{ display: 'block' }}
             data-ad-client="ca-pub-4900927804487493"
             data-ad-slot="5647930196"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>


    </div>);
};

export default Adsense;
