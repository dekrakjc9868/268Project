import axios from "axios";

export default axios.create({
  baseURL: "https://blusoldec.duckdns.org:3443",
  headers: {
    "Content-type": "application/json"
  }
});