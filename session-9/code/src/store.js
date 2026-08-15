import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

export const store = createStore(rootReducer);
// export const store = createStore(combineReducers({ rootReducer, })); //pass the reducer
