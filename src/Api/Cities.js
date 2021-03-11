import axios from "axios";

const {REACT_APP_API_CITIES_URL, REACT_APP_API_CITIES_PASS} = process.env;
console.log(REACT_APP_API_CITIES_URL, REACT_APP_API_CITIES_PASS)
const options = {
    method: 'GET',
    url: REACT_APP_API_CITIES_URL,
    headers: {
        'x-api-key': REACT_APP_API_CITIES_PASS
    }
};

const cities = {
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




export default cities;