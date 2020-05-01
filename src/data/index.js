import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import countriesReducer from "./countries";
import checkedcountriesReducer from "./checkedCountries";

export default createStore(
  combineReducers({
    countries: countriesReducer,
    checkedcountries: checkedcountriesReducer
  }),
  applyMiddleware(thunk, logger)
);
