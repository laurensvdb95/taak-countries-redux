/*****************/
/* INITIAL STATE */
/*****************/
const initialState = [];

/*********/
/* TYPES */
/*********/
const CHECK_COUNTRY = "CHECK_COUNTRY";
const UNCHECK_COUNTRY = "UNCHECK_COUNTRY";

/*******************/
/* ACTION CREATORS */
/*******************/
export const checkCountry = payload => ({
  type: CHECK_COUNTRY,
  payload
});
export const uncheckCountry = numericCode => ({
  type: UNCHECK_COUNTRY,
  payload: numericCode
});

/***********/
/* REDUCER */
/***********/
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_COUNTRY:
      return [...state, payload];
    case UNCHECK_COUNTRY:
      return state.filter(data => data.numericCode !== payload);
    default:
      return state;
  }
};
