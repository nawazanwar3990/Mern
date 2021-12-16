import axios from "axios";
import header from "./headers";
import { API_PATH } from "../config";

const create = (object) => {
    return axios.post(API_PATH + "category/create",object, { headers: header() });
};
const findOne = (id) => {
    return axios.get(API_PATH + "/category/"+id, { headers: header() });
};
//used for filteration
const find = (object) => {
    return axios.get(API_PATH + "/category/",object,{ headers: header() });
};
const findAll = () => {
    return axios.get(API_PATH + "categories", { headers: header() });
};

const update = (id,object) => {
    return axios.put(API_PATH + "/category/"+id,object, { headers: header() });
};
const remove = (id) => {
    return axios.delete(API_PATH + "/category/"+id, { headers: header() });
};
const removeAll = () => {
    return axios.delete(API_PATH + "/category", { headers: header() });
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



