import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import MainApp from "../App";

import NotFound from "../containers/404/404";
import PeopleDetailPage from "../containers/Peoples/PeopleDetailPage";
import Peoples from "../containers/Peoples";
import Films from "../containers/Films";
import FilmDetailPage from "../containers/Films/FilmDetailPage";
export default class Root extends Component {
  render() {
    const RestrictedRoutes = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          !this.props.isAuthenticated ? (
            <Component />
          ) : (
            // <Component {...props} />
            <Redirect to={"/"} />
          )
        }
      />
    );
    const MustAuthenticatedRoutes = ({
      component: Component,
      parent: Parent,
      ...rest
    }) => (
      <Route
        {...rest}
        render={props =>
          this.props.isAuthenticated ? (
            Parent ? (
              <Parent>
                <Component {...props} {...rest} />
              </Parent>
            ) : (
              <Component {...props} />
            )
          ) : (
            <Redirect to={"/"} />
          )
        }
      />
    );
    return (
      <Router>
        <MainApp>
          <Switch>
            <Route exact path="/" component={Peoples} />
            <Route exact path="/people" component={Peoples} />
            <Route exact path="/people/:id" component={PeopleDetailPage } />
            <Route exact path="/films" component={Films} />
            <Route exact path="/films/:id" component={FilmDetailPage } />
            <Route path="*" component={NotFound} />
          </Switch>
        </MainApp>
       

      </Router>
    );
  }
}
