import axios from "axios";

export default axios.create({
  baseURL: "165.227.123.95:3443",
  headers: {
    "Content-type": "application/json"
  }
});