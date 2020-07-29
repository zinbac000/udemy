import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-db2fd.firebaseio.com"
});

export default instance;
