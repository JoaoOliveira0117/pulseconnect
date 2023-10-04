import axios from "axios";

const {get, post, put, delete: destroy } = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});

export { get, post, put, destroy };