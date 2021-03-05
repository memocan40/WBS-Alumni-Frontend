import axios from "axios";

const baseURL="https://hidden-shelf-31461.herokuapp.com/";


const Api={
    getAllUsers: async()=>{
        try{
            const response = await axios.get(`${baseURL}users`);
            if(response.data) {
                return response.data.data;
            } else {
                console.log("no user data");
                return [];
            }

        } catch(e) {
            console.error("getAllUsers: ", e);
            return [];
        }
    },
    getUserbyID:(id)=>{axios.get(`${baseURL}users/${id}`)},
    createNewuser:(requestBody)=>{axios.post(`${baseURL}users/create`,requestBody)}
}

export default Api;
