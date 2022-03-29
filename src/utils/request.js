import axios from "axios";
import { AUTH_TOKEN, getCookie } from "./cookie";

// export const baseurl = "https://mployeed.herokuapp.com";
export const baseurl = "http://50.28.103.83:3006";

const header = () => ({
  Authorization: getCookie(AUTH_TOKEN),
});

export const doGet = async (path) => {
  const response = await axios.get(`${baseurl}/${path}`, {
    headers: header(),
  });

  return response.data;
};

export const doPost = async (path, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`${baseurl}/${path}`, data, {
        headers: header(),
      });
      if ([200, 201].includes(response.status)) {
        return resolve(response);
      }
      return reject(response);
    } catch (error) {
      return reject(error);
    }
  });
};

export const doPut = async (path, data) => {
  return new Promise(async (resolve, reject) => {
    const response = await axios.put(`${baseurl}/${path}`, data, {
      headers: header(),
    });

    if ([200, 201].includes(response.status)) {
      return resolve(response);
    }

    return reject(response);
  });
};

export const doDelete = async (path, data) => {
  return new Promise(async (resolve, reject) => {
    const response = await axios.delete(`${baseurl}/${path}`, {
      headers: header(),
      data,
    });

    if ([200, 201].includes(response.status)) {
      return resolve(response);
    }

    return reject(response);
  });
};