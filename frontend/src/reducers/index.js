import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import categories  from "./categoryReducer";
import products from "./productReducer";
import users from "./userReducer";
import roles from "./roleReducer";
import expenses from "./expenseReducer";
import incomes from "./incomeReducer";
import vendors from "./vendorReducer";
import permissions from './permissionReducer';
export default combineReducers({
  auth,
  message,
  categories,
  products,
  users,
  roles,
  expenses,
  incomes,
  vendors,
  permissions
});