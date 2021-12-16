import {
  
    ALL_PRODUCTS,
    CREATE_PRODUCT
  
  } from "./type";

  import productService from "../services/productService";
  
  export const createProduct= (object) => async (dispatch) => {
    try {
      const res = await productService.create(object);
  
      dispatch({
        type: CREATE_PRODUCT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };


  export const allProducts = () => async (dispatch) => {

    try {
  
      const res = await productService.findAll();
       dispatch({
         type: ALL_PRODUCTS,
         payload: res.data,
       });
       return Promise.resolve(res.data);
  
    } catch (err) {
  
      return Promise.reject(err);
  
    }
  };