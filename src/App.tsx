import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./views/main/Main";
import Authentication from "./views/authentication/Authentication";
import Registration from "./views/registration/Registration";
import Template from "./components/Template";
import "./styles/App.scss";
import "./styles/nav-bar.scss";

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/sign-in" component={Authentication} />
        <Route path="/sign-up" component={Registration} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </Template>
  );
}

export default App;
