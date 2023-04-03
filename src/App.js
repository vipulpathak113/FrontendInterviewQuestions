import { Suspense } from "react";
import { Router } from "react-router-dom";
import history from "./history";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Suspense fallback={"Loading"}>
          <Routes />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
