import { createStore,applyMiddleware} from "redux";
import combineReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  combineReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;