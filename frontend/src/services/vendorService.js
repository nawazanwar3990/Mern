import axios from "axios";
import header from "./headers";
import { API_PATH } from "../config";

const create = (object) => {
    return axios.post(API_PATH + "vendor/create",object, { headers: header() });
};
const findAll = () => {
    return axios.get(API_PATH + "/vendors", { headers: header() });
};

export default {
findAll,
create

}