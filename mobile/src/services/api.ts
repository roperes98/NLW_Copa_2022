import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.SERVER}:3333`
})