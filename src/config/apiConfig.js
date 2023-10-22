import axios from "axios";

export const APIConfig = axios.create({
    baseURL: "https://zary-closet-be.onrender.com/api/v1/",
  });