import axios from "axios";

const baseURL="http://localhost:3000/";


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

    updateUserbyID: async (obj)=>{
        try{
            const response = await axios.post(`${baseURL}users/update/${obj.id}`, obj);
            if(response) {
                return response;
            } else {
                return[];
            }
        }catch(e) {
            console.error("updateUserbyID:", e);
            return [];
        }
    },


    getUserbyID:(id)=>{axios.get(`${baseURL}users/${id}`)},
    createNewuser:(requestBody)=>{axios.post(`${baseURL}users/register`,requestBody,
    {
        headers:{'Access-Control-Allow-Origin' : "http://localhost:3000" }})}
}

export default Api; 
