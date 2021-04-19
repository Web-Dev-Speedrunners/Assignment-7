import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CreditPage from "../pages/credit";
import DebitPage from "../pages/debit";

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/credit" component={CreditPage} />
      <Route path="/debit" component={DebitPage} />
      <Redirect to="/credit" />
    </Switch>
  );
};

export default AppRouter;
