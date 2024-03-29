import axios, { Axios } from "axios";

const instance: Axios = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api",
  headers: {
    Accept: "application/json; charset=UTF-8",
  },
});

export default instance;
