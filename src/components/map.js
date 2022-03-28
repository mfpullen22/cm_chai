import React, { useState, useEffect } from 'react';
import CryptoMap from './cryptomap';
import Legend from "./legend";
import LoadCountiesTask from '../tasks/LoadCountriesTask';

function Map() {
    const[countries, setCountries] = useState([]);

    function load() {
        const loadCountriesTask = new LoadCountiesTask();
        loadCountriesTask.load((countries) => setCountries(countries));
    }

    useEffect(load, []);


    return (
        <div>
            <CryptoMap countries={countries}/>
            <Legend />
        </div>
    );
}

export default Map;
