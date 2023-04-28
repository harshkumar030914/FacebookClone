import { combineReducers } from "redux";
import reducer from "./reducer";
const reducers_store = combineReducers({
  reducer: reducer,
});
export default reducers_store;
