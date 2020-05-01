import "./styles.css";
import React from "react";
import { Provider } from "react-redux";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import store from "./data";
import CountryForm from "./components/CountryForm";
import Countries from "./components/Countries";
import CheckedCountries from "./components/CheckedCountries";

export default () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h4">
                Create your own traveling checklist!
              </Typography>
            </Toolbar>
          </AppBar>
          <Link to="/">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Link>
          <Link to="/checked">
            <IconButton>
              <CheckCircleIcon />
            </IconButton>
          </Link>
          <Switch>
            <Route exact path="/">
              <CountryForm />
              <Countries />
            </Route>
            <Route path="/checked">
              <CheckedCountries />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};
