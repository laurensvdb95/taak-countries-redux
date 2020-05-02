import React from "react"; 
import {useSelector} from "react-redux"; 

import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export default () => {
    const checkedcountries = useSelector(state => state.checkedcountries);
  const checkedCountriesArr = checkedcountries.map(
    checkedCountry => checkedCountry.numericCode
  );
    return (
        <IconButton>
        <Badge badgeContent={checkedCountriesArr.length} color="primary">
          <CheckCircleIcon />
          </Badge>
        </IconButton>
    )
}; 