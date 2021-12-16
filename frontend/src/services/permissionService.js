import axios from "axios";
import header from "./headers";
import { API_PATH } from "../config";

const create = (object) => {
    return axios.post(API_PATH + "permission/create",object, { headers: header() });
};

const findAll = () => {
    return axios.get(API_PATH + "permissions", { headers: header() });
};

export default {
    create,
    findAll

}