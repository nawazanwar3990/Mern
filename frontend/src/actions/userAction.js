import {
  
    ALL_USER,
    CREATE_USER
    
  
  } from "./type";

  import userServices from "../services/userService";

export const createUser = (object) => async (dispatch) => {
  try {
    const res = await userServices.create(object);

    dispatch({
      type: CREATE_USER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

 

  export const allUser = () => async (dispatch) => {

    try {
  
        const res = await userServices.findAll();
         dispatch({
           type: ALL_USER,
           payload: res.data,
         });
         return Promise.resolve(res.data);
    
      } catch (err) {
    
        return Promise.reject(err);
    
      }
    };