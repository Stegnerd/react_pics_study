import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID bcc2c0b5ca6975d5f31989837d523ecff1711a07109e9515f738a7506f6e77ce"
  }
});
