import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import petsReducer from "./pet/reducers";

const rootReducer = combineReducers({
    petList: petsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))