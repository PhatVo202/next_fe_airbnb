import axios, { AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
      timeout: 10000,
      headers: {
        TokenCybersoft: process.env.NEXT_PUBLIC_TOKEN_CYBERSOFT,
        "Content-Type": "application/json",
      },
    });
  }
}

const http = new Http().instance;

export default http;
