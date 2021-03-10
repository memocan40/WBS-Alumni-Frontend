import axios from "axios";

const getCitiesURL = `${process.env.REACT_APP_API_CITIES_URL}`;
const getCitiesPass = `${process.env.REACT_APP_API_CITIES_PASS}`;
console.log(getCitiesPass, getCitiesURL);
const options = {
    method: 'GET',
    url: getCitiesURL,
    headers: {
        'x-api-key': getCitiesPass
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