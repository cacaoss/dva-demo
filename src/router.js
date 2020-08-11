import React from "react";
import {Router, Route, Switch, Link} from "dva/router"
import IndexPage from "./pages/IndexPage";
import LogInPage from "./pages/LogInPage";
import WelcomePage from "./pages/WelcomePage"

export default function ({history}) {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={IndexPage}/>
          <Route path={"/login"} component={LogInPage}/>
          <Route path={"/welcome"} component={WelcomePage}/>
        </Switch>
      </Router>
    </div>
  );
}
