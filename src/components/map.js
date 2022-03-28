import React, { useState } from 'react';
import CryptoMap from './cryptomap';
import Legend from "./legend";
import features from "../data/countries.json";

function Map() {
    //const[countries, setCountries] = useState([]);
    const countries = features;
    
    return (
        <div>
            <CryptoMap countries={countries}/>
            <Legend />
        </div>
    );
}

export default Map;
