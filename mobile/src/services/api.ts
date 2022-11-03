import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.23.251.129:3333'
})