import axios from "axios";

const baseURL = "https://hidden-shelf-31461.herokuapp.com/";
// const baseURL = "http://localhost:3000/";

const Api = {
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${baseURL}users`);
      if (response.data) {
        console.log(response.data.data)
        return response.data.data;
      }
    } catch (e) {
      console.error("getAllUsers: ", e);
      return [];
    }
  },

  updateUserbyID: async (obj) => {
    try {
      const response = await axios.put(`${baseURL}users/update/${obj.data.id}`, obj);
      if (response) {
        console.log(response);
        return response;
      } else {
        return [];
      }
    } catch (e) {
      console.error("updateUserbyID:", e);
      return [];
    }
  },

  getInterests: async () => {
    try {
      const response = await axios.get(`${baseURL}interests`);
      if (response) {
        return response.data.data;
      } else {
        return [];
      }
    } catch (e) {
      console.error("getInterests:", e);
      return [];
    }
  },

  getWorkStatuses: async() => {
    try{
      const response = await axios.get(`${baseURL}work_status`)
      if(response) {
        return response.data;
      }
    } catch (e) {
      console.error(e);
      return [];
    }
  },

  getAllBatches: async() => {
    try{
      const response = await axios.get(`${baseURL}batches`)
      if(response) {
        return response.data;
      }
    } catch (e) {
      console.error(e);
      return [];
    }
  },

  logIn: (requestBody) => {
    axios.post(`${baseURL}users/login`, requestBody).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.error(error);
      }
    );
  },

  getUserbyID: (id) => {
    axios.get(`${baseURL}users/${id}`);
  },

};

export default Api;
