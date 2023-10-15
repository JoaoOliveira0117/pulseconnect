import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  params: {},
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});

instance.interceptors.response.use(async function (response) {
  return response.data;
}, async function (error) {
  return Promise.reject(error.response.data);
});

const { get, post, put, delete: destroy } = instance

export { get, post, put, destroy };