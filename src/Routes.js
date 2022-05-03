import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";


const Home = React.lazy(() => import("./components/home"));
const Debouncing = React.lazy(() => import("./components/debouncing"));
const InfiniteScroll = React.lazy(() => import("./components/infiniteScroll"));
const ProgressBar = React.lazy(() => import("./components/progressBar"));
const Tictactoe = React.lazy(() => import("./components/tictactoe"));

const Routes = withRouter(({ location }) => {
  const routes = [
    {
      component: Home,
      path: "/FrontendInterviewQuestions",
    },
    {
      component: Debouncing,
      path: "/debouncing",
    },
    {
      component: InfiniteScroll,
      path: "/infiniteScroll",
    },
    {
      component: ProgressBar,
      path: "/progressbar",
    },
    {
      component: Tictactoe,
      path: "/tictactoe",
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
