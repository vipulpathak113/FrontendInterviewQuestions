import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Nested from "./components/Implementation/NestedComments";

const Home = React.lazy(() => import("./components/home"));
const Debouncing = React.lazy(() =>
  import("./components/Implementation/debouncing")
);
const InfiniteScroll = React.lazy(() =>
  import("./components/Implementation/infiniteScroll")
);
const ProgressBar = React.lazy(() =>
  import("./components/Implementation/progressBar")
);
const Tictactoe = React.lazy(() =>
  import("./components/Implementation/tictactoe")
);
const SodukuSolver = React.lazy(() =>
  import("./components/Implementation/sodukuSolve")
);
const HOCImp = React.lazy(() =>
  import("./components/Implementation/HOC/HOCExample")
);
const Playground = React.lazy(() => import("./components/playground"));
const Section = React.lazy(() => import("./components/Implementation/Section"));
const Timer = React.lazy(() => import("./components/Implementation/timer"));
const ErrorBoundry = React.lazy(() =>
  import("./components/Implementation/ErrorBoundary/ErrorComponent")
);
const ContextApi = React.lazy(() => import("./Contexts/ContextApi"));
const CustomHookUse = React.lazy(() =>
  import("./components/Implementation/CustomHookUse")
);
const Pagination = React.lazy(() =>
  import("./components/Implementation/Pagination")
);
const FileStructure = React.lazy(() =>
  import("./components/Implementation/fileStructure")
);
const TabComponent = React.lazy(() =>
  import("./components/Implementation/Tab/TabComponent")
);
const Accordian = React.lazy(() =>
  import("./components/Implementation/Accordian")
);
const Slider = React.lazy(() =>
  import("./components/Implementation/Slider/Slider")
);
const Modal = React.lazy(() =>
  import("./components/Implementation/Modal/Modal")
);
const SolidPrincipless = React.lazy(() => import("./SolidPrinciples"));
const DetectOutside = React.lazy(() =>
  import("./components/Implementation/DetectOutside")
);
const Star = React.lazy(() => import("./components/Implementation/Star/Star"));
const ToggleSwitch = React.lazy(() =>
  import("./components/Implementation/ToggleSwitch/ToggleSwitch")
);
const TransferList = React.lazy(() =>
  import("./components/Implementation/TransferList")
);

const HighlightText = React.lazy(() =>
  import("./components/Implementation/HighlightText")
);

const Routes = withRouter(({ location }) => {
  const routes = [
    {
      component: Home,
      path: "/",
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
    {
      component: ErrorBoundry,
      path: "/errorBoundry",
    },
    {
      component: ContextApi,
      path: "/contextApi",
    },
    {
      component: CustomHookUse,
      path: "/customHookUse",
    },
    {
      component: Pagination,
      path: "/pagination",
    },
    {
      component: FileStructure,
      path: "/fileStructure",
    },
    {
      component: TabComponent,
      path: "/tabs",
    },
    {
      component: Accordian,
      path: "/accordian",
    },
    {
      component: Slider,
      path: "/slider",
    },
    {
      component: Modal,
      path: "/modal",
    },
    {
      component: SolidPrincipless,
      path: "/solid",
    },
    {
      component: Star,
      path: "/star",
    },
    {
      component: DetectOutside,
      path: "/detectOutside",
    },
    {
      component: ToggleSwitch,
      path: "/toggleSwitch",
    },
    {
      component: TransferList,
      path: "/transferList",
    },
    {
      component: Nested,
      path: "/nestedComments",
    },
    {
      component: HighlightText,
      path: "/highlightText",
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
