import { Suspense, useContext } from "react";
import { Router } from "react-router-dom";
import history from "./history";
import Routes from "./Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ThemeContext } from "./Contexts/ThemeContext";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [{ theme }] = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Navbar />
      <Router history={history}>
        <Suspense fallback={"Loading"}>
          <Routes />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
library.add(fab, fas, far);
