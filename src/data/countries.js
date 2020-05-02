import axios from "axios";

/*****************/
/* INITIAL STATE */
/*****************/
const initialState = {
  loading: false,
  error: "",
  data: []
};

/*********/
/* TYPES */
/*********/
const FETCH_COUNTRIES_START = "FETCH_COUNTRIES_START";
const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
const FETCH_COUNTRIES_ERROR = "FETCH_COUNTRIES_ERROR";
/*******************/
/* ACTION CREATORS */
/*******************/
export const getCountries = str => dispatch => {
  dispatch(loadCountries());
  axios
    .get(process.env.REACT_APP_ENDPOINTCOUNTRIES + str)
    .then(response => {
      if (response.data.message === "Not Found") {
        dispatch(setError("No countries found"));
      } else {
        dispatch(setCountries(response.data));
      }
    })
    .catch(error => {
      dispatch(setError("API endpoint could not be reached"));
    });
};
export const setError = msg => ({ type: FETCH_COUNTRIES_ERROR, payload: msg });
export const setCountries = countries => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries
});
export const loadCountries = () => ({ type: FETCH_COUNTRIES_START });
/***********/
/* REDUCER */
/***********/
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COUNTRIES_START:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      };
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
