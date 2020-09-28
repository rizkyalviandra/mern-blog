import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainApp} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default Routes;
