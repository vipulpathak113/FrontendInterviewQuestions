import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";


const Home = React.lazy(() => import("./components/home"));
const Debouncing = React.lazy(() => import("./components/debouncing"));
const InfiniteScroll = React.lazy(() => import("./components/infiniteScroll"));
const ProgressBar = React.lazy(() => import("./components/progressBar"));
const Tictactoe = React.lazy(() => import("./components/tictactoe"));
const SodukuSolver = React.lazy(() => import("./components/sodukuSolve"));
const ForEachPollyfill = React.lazy(() => import("./components/forEachPollyfill"));
const HOCImp = React.lazy(() => import("./components/HOC/HOCExample"));
const Playground = React.lazy(() => import("./components/playground"));
const Section = React.lazy(() => import("./components/Section"));
const Timer = React.lazy(() => import("./components/timer"));

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
    {
      component: SodukuSolver,
      path: "/sodukuSolver",
    },
    {
      component: ForEachPollyfill,
      path: "/forEachPollyfill",
    },
    {
      component: HOCImp,
      path: "/hoc",
    },
    {
      component: Playground,
      path: "/playground",
    },
    {
      component: Section,
      path: "/section",
    },
    {
      component: Timer,
      path: "/timer",
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
