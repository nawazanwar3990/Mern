import {
  
    ALL_INCOME,
    CREATE_INCOME,
    
  
  } from "./type";

  import incomeService from "../services/incomeService";

  
export const createIncome = (object) => async (dispatch) => {

  try {

    const res = await incomeService.create(object);
    dispatch({
      type: CREATE_INCOME,
      payload: res.data,
    });
    return Promise.resolve(res.data);

  } catch (err) {

    return Promise.reject(err);

  }
};

  export const allIncomes = () => async (dispatch) => {

    try {
  
        const res = await incomeService.findAll();
         dispatch({
           type: ALL_INCOME,
           payload: res.data,
         });
         return Promise.resolve(res.data);
    
      } catch (err) {
    
        return Promise.reject(err);
    
      }
    };