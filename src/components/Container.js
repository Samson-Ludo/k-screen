import React from "react";
import {
  Dashboard,
  Analytics,
  Balances,
  Contact,
  Customers,
  Logout,
  Settings,
  Team,
  Error,
} from "../pages";

import { Switch, Route } from "react-router-dom";

function Container() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true}>
          <Dashboard></Dashboard>
        </Route>
        <Route path="/analytics" exact={true}>
          <Analytics></Analytics>
        </Route>
        <Route path="/balances" exact={true}>
          <Balances></Balances>
        </Route>
        <Route path="/customers" exact={true}>
          <Customers></Customers>
        </Route>
        <Route path="/contact" exact={true}>
          <Contact></Contact>
        </Route>
        <Route path="/settings" exact={true}>
          <Settings></Settings>
        </Route>
        <Route path="/team" exact={true}>
          <Team></Team>
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
