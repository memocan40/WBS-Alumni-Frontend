import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://genesis.sofodata.com/v1/wTucJW?limit=100',
    headers: {
        'x-api-key': 'PuhgDyJzElVNHwGmxSMvYtkdcCRhCXFzXQtT'
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