import axios from "axios";
const { REACT_APP_BASE_URL } = process.env;

const Api = {
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${REACT_APP_BASE_URL}users`);
      if (response.data) {
        return response.data.data;
      }
    } catch (e) {
      console.error("getAllUsers: ", e);
      return [];
    }
  },

  updateUserbyID: async (obj, token) => {
    try {
      const response = await axios.put(
        `${REACT_APP_BASE_URL}users/update/${obj.id}`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
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
      const response = await axios.get(`${REACT_APP_BASE_URL}interests`);
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

  getWorkStatuses: async () => {
    try {
      const response = await axios.get(`${REACT_APP_BASE_URL}work_status`);
      if (response) {
        return response.data;
      }
    } catch (e) {
      console.error(e);
      return [];
    }
  },

  getAllBatches: async () => {
    try {
      const response = await axios.get(`${REACT_APP_BASE_URL}batches`);
      if (response) {
        return response.data;
      }
    } catch (e) {
      console.error(e);
      return [];
    }
  },

  logIn: (requestBody) => {
    axios.post(`${REACT_APP_BASE_URL}users/login`, requestBody).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.error(error);
      }
    );
  },

  getUserbyID: async (id) => {
    try {
      const res = await axios.get(`${REACT_APP_BASE_URL}users/${id}`);
      if (res) {
        return res.data.data;
      }
    } catch (e) {
      console.error(e);
    }
  },

  getUserByBatch: (batch) => {
    const response = axios.get(`${REACT_APP_BASE_URL}users/batch/${batch}`);
    if (response) {
      return response;
    }
  },

  getUserByInterest: async (interest) => {
    try {
      const res = await axios.get(`${REACT_APP_BASE_URL}interest/${interest}`);
      if (res) {
        return res;
      }
    } catch (e) {
      console.error(e);
    }
  },
};

export default Api;
