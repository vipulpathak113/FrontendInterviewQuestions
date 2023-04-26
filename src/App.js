import { Suspense } from "react";
import { Router } from "react-router-dom";
import history from "./history";
import Routes from "./Routes";
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

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
library.add(fab, fas, far)
