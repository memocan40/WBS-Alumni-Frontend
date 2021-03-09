import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: {countryIds: 'Q183', minPopulation: '50000', "limit": "100",},
    headers: {
      'x-rapidapi-key': '413da61b6fmsh457b7215343136ap153fa5jsn17ec85293c71',
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
};

const countries = {
    getAllCities : async() => {
        try{
            const response = axios.request(options);
            if(response) {
                return response;
            }
        }catch(e) {
            console.error("updateUserbyID:", e);
            return;
        }
    }
}

export default countries;