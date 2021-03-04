import axios from "axios";

const baseURL="https://hidden-shelf-31461.herokuapp.com/";


const Api={
    getAllUsers:()=>{axios.get(`${baseURL}/users`)},
    getUserbyID:(id)=>{axios.get(`${baseURL}/users/${id}`)},
    createNewuser:(requestBody)=>{axios.post(`${baseURL}/users/create`,requestBody)}
}