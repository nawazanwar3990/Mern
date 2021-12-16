import {
  
    ALL_ROLE,
    CREATE_ROLE
    
  
  } from "./type";

  import roleServices from "../services/roleService";
  export const createRole= (object) => async (dispatch) => {
    try {
      const res = await roleServices.create(object);
  
      dispatch({
        type: CREATE_ROLE,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const allRole = () => async (dispatch) => {

    try {
  
        const res = await roleServices.findAll();
         dispatch({
           type: ALL_ROLE,
           payload: res.data,
         });
         return Promise.resolve(res.data);
    
      } catch (err) {
    
        return Promise.reject(err);
    
      }
    };