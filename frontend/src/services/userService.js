import axios from "axios";
import header from "./headers";
import { API_PATH } from "../config";

const create = (object) => {
    return axios.post(API_PATH + "user/create",object, { headers: header() });
};


const findAll = () => {
    return axios.get(API_PATH + "users", { headers: header() });
};




export default {
    create,
    findAll
}