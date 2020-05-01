import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  CardActions
} from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { uncheckCountry } from "../data/checkedCountries";

export default () => {
  const checkedcountries = useSelector(state => state.checkedcountries);
  const dispatch = useDispatch();

  const uncheckHandler = numericCode => e => {
    dispatch(uncheckCountry(numericCode));
  };

  return (
    <div>
      {checkedcountries.length === 0 && <h2>No countries checked</h2>}
      {checkedcountries.length !== 0 && (
        <div>
          <h2>Place's I have been</h2>
          {checkedcountries.map(({ numericCode, name, flag }) => (
            <div className="card">
              <Card key={numericCode}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                  </CardContent>
                  <CardMedia component="img" image={flag} title={name} />
                  <CardActions>
                    <IconButton
                      aria-label="Delete"
                      onClick={uncheckHandler(numericCode)}
                    >
                      <ClearIcon color="primary" />
                    </IconButton>
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
