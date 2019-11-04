import React from 'react';
import './assets/styles.css';
import Layout from "./containers/Layout";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faWhatsapp, faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInfoCircle, faGlobeAmericas, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter} from "react-router-dom";

library.add(faWhatsapp, faFacebook, faInfoCircle, faGlobeAmericas, faEnvelope)

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
