import {
  
    ALL_PERMISSION,
    CREATE_PERMISSION
    
  
  } from "./type";

  import permissionService from "../services/permissionService";
  export const permissionCreate= (object) => async (dispatch) => {
    try {
      const res = await permissionService.create(object);
  
      dispatch({
        type: CREATE_PERMISSION,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const allPermission = () => async (dispatch) => {

    try {
  
        const res = await permissionService.findAll();
         dispatch({
           type: ALL_PERMISSION,
           payload: res.data,
         });
         return Promise.resolve(res.data);
    
      } catch (err) {
    
        return Promise.reject(err);
    
      }
    };