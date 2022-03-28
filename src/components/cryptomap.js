import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./cryptomap.css";
import data from "../data/cryptodataDec2021.json";
import features from "../data/countries.json";

function CryptoMap() {

    for (let i = 0; i < features.length; i++) {
        const country = features[i];
        console.log(country.properties.ISO_A3)
    }

    const mapStyle = {
        fillColor:"white",
        weight: 1,
        color: "black",
        fillOpacity: 1,
    };

    function onEachCountry(country, layer) {
        //layer.options.fillColor = country.properties.color;
        const name = country.properties.ADMIN;
        const confirmedText = country.properties.confirmedText;
        layer.bindPopup(`${name} ${confirmedText}`);
    
    };

    return (
        <MapContainer style={{height: "70vh"}} zoom={2} center={[50, 100]}>
            <GeoJSON style = {mapStyle} data={features} onEachFeature={onEachCountry}/>
        </MapContainer>
    );
}

export default CryptoMap;