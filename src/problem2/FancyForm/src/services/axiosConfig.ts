import axios from "axios";

export const api = axios.create({
  baseURL: "https://interview.switcheo.com",
  headers: {
    "Content-Type": "application/json",
  },
});
