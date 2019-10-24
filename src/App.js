import React from 'react';
import logo from './logo.svg';
import './assets/styles.css';
import Layout from "./container/Layout";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInfoCircle, faGlobeAmericas, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faWhatsapp, faFacebook, faInfoCircle, faGlobeAmericas, faEnvelope)

function App() {
    return (
        <div className="container-fluid">
           <Layout/>
        </div>
    );
}

export default App;
