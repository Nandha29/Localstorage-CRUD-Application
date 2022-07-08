import { combineReducers } from "redux";
import UserReducer from "../Reducer/CreateReducer/UserReducer";
import EmployeeReducer from "../Reducer/CreateReducer/EmployeeReducer";

const rootReducers = combineReducers({
  UserReducer,
  EmployeeReducer,
});

export default rootReducers;
