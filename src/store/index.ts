import { applyMiddleware, combineReducers, createStore } from "redux";
import { dataReducer } from "./dataReducer";
import thunk from "redux-thunk";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  data: dataReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
