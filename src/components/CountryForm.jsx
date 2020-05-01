import React from "react";
import { useField } from "../hooks";
import { useDispatch } from "react-redux";
import { getCountries } from "../data/countries";

import { TextField, Button } from "@material-ui/core";

export default () => {
  const { error, setError, setValue, ...field } = useField("", true);
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    if (field.value === "") {
      setError(true);
    } else {
      setValue("");
      dispatch(getCountries(field.value));
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <TextField {...field} className="textField" label="enter country name" />
      <div className="searchButton">
        <Button variant="contained" color="primary">
          Search
        </Button>
      </div>
    </form>
  );
};
