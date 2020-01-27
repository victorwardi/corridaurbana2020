import React from 'react';
import './assets/styles.css';
import Layout from "./containers/Layout";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faWhatsapp, faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInfoCircle, faGlobeAmericas, faMapMarkedAlt, faEnvelope, faBookmark, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faClock, faCalendar} from '@fortawesome/free-regular-svg-icons';
import {BrowserRouter} from "react-router-dom";

library.add(faWhatsapp, faFacebook, faInfoCircle, faGlobeAmericas,
    faEnvelope, faClock, faMapMarkedAlt, faCalendar, faBookmark, faSearch)

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Layout/>
            </div>
        </BrowserRouter>
    );
}

export default App;
