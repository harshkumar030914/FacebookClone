import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers_store from "./Reducer";

const store = createStore(reducers_store, {}, applyMiddleware(thunk));
export default store;
