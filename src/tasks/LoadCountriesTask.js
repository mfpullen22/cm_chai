//import data from "../data/cryptodataDec2021.json";
//import features from "../data/countries.json";

class LoadCountriesTask{
    setState = null;

    load = (setState) => {
        this.setState = setState;
        //processCryptoData(data);
    }
}

/* function processCryptoData(cryptoCountries) {
    for (let i = 0; i < features.length; i++) {
        const country = features[i];
        const cryptoCountry = cryptoCountries.find(
            (cryptoCountry) => country.properties.ISO_A3 === cryptoCountry.ISO3
        );
        country.properties.confirmed = 0;
        country.properties.confirmedText = 0;
    }
    this.setState(features);
}; */

/* min 45 of video for COVID data and PapaParse */

export default LoadCountriesTask;