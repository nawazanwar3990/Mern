import {
  
    ALL_EXPENSE,
    CREATE_EXPENSE,
    
  
  } from "./type";

  import expenseService from "../services/expenseService";

  export const creatExpense = (object) => async (dispatch) => {

    try {
  
      const res = await expenseService.create(object);
      dispatch({
        type: CREATE_EXPENSE,
        payload: res.data,
      });
      return Promise.resolve(res.data);
  
    } catch (err) {
  
      return Promise.reject(err);
  
    }
  };
  

  export const allExpenses = () => async (dispatch) => {

    try {
  
        const res = await expenseService.findAll();
         dispatch({
           type: ALL_EXPENSE,
           payload: res.data,
         });
         return Promise.resolve(res.data);
    
      } catch (err) {
    
        return Promise.reject(err);
    
      }
    };