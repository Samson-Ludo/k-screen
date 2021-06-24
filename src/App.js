import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import ResponsiveDrawer from "./components/ResponsiveDrawer";

function App() {
  let currentPageTitle = window.location.pathname;

  return (
    <Router>
      <ResponsiveDrawer currentPageTitle={currentPageTitle} />
    </Router>
  );
}

export default App;
