import {

  ALL_VENDOR,
  CREATE_VENDOR,

} from "./type";

import vendorService from "../services/vendorService";
export const createVendor = (object) => async (dispatch) => {
  try {
    const res = await vendorService.create(object);

    dispatch({
      type: CREATE_VENDOR,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const allVendor = () => async (dispatch) => {

  try {

    const res = await vendorService.findAll();
    dispatch({
      type: ALL_VENDOR,
      payload: res.data,
    });
    return Promise.resolve(res.data);

  } catch (err) {

    return Promise.reject(err);

  }
};