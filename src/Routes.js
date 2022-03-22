import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";


const Home = React.lazy(() => import("./components/home"));

const Routes = withRouter(({ location }) => {
  const routes = [
    {
      component: Home,
      path: "/FrontendInterviewQuestions",
    },
  ];

  return (
    <Switch location={location}>
      {routes.map((route) => {
        return (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
});

export default Routes;
