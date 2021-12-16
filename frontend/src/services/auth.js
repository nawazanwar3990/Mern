import axios from "axios";
import { API_PATH } from "../config";

//register(): POST {object}
const register = (object) => {
  return axios.post(API_PATH + "auth/register", object);
};

  
 // login(): POST {object} & save JWT to Local Storage
  const login = (object) => {
    return axios
      .post(API_PATH + "auth/login",object)
      .then((response) => {
          return response.data;
      });
  };

  //logout(): remove JWT from Local Storage
  const logout = () => {
    localStorage.removeItem("user");
  };


  export default {
   
    login,
    logout,
    register
  };