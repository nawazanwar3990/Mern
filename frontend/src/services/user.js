import axios from "axios";
import header from "./headers";
import { API_PATH } from "../config";


const getAllUsers = () => {
    return axios.get(API_PATH + "/users", { headers: header() });
  };

  export default {
    getAllUsers
  }