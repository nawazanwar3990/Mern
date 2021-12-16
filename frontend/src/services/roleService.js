import axios from "axios";
import header from "./headers";
import { API_PATH } from "../config";

const create = (object) => {
    return axios.post(API_PATH + "role/create",object, { headers: header() });
};
const findOne = (id) => {
    return axios.get(API_PATH + "/roles/"+id, { headers: header() });
};
const find = (object) => {
    return axios.get(API_PATH + "/roles/",object,{ headers: header() });
};
const findAll = () => {
    return axios.get(API_PATH + "roles", { headers: header() });
};

const update = (id,object) => {
    return axios.put(API_PATH + "/roles/"+id,object, { headers: header() });
};
const remove = (id) => {
    return axios.delete(API_PATH + "/roles/"+id, { headers: header() });
};
const removeAll = () => {
    return axios.delete(API_PATH + "/roles", { headers: header() });
};

export default {
    create,
    find,
    findOne,
    findAll,
    update,
    remove,
    removeAll
}