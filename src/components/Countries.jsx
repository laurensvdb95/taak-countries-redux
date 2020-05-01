import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "@material-ui/lab";

import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  CardActions,
  CircularProgress
} from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { checkCountry } from "../data/checkedCountries";

export default () => {
  const { loading, error, data } = useSelector(state => state.countries);
  const checkedcountries = useSelector(state => state.checkedcountries);
  const checkedCountriesArr = checkedcountries.map(
    checkedCountry => checkedCountry.numericCode
  );
  const dispatch = useDispatch();

  const checkHandler = country => e => {
    dispatch(checkCountry(country));
  };

  return (
    <div>
      {loading && <CircularProgress />}
      {error !== "" && <Alert severity="error">{error}</Alert>}
      {data.length !== 0 && (
        <div>
          <h2>Results</h2>
          {data.map(country => (
            <div className="card">
              <Card key={country.numericCode}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {country.name}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    image={country.flag}
                    title={country.name}
                  />
                  <CardActions>
                    {!checkedCountriesArr.includes(
                      `${country.numericCode}`
                    ) && (
                      <IconButton
                        aria-label="been there!"
                        onClick={checkHandler(country)}
                      >
                        <DoneIcon color="primary" />
                      </IconButton>
                    )}
                    {checkedCountriesArr.includes(`${country.numericCode}`) && (
                      <CheckCircleIcon color="primary" />
                    )}
                  </CardActions>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
