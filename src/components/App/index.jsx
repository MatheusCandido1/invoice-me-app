
import { BrowserRouter } from "react-router-dom";

import Layout from "../Layout";

import Router from "../../router";


function App() {
  return (
    <BrowserRouter>
        <Router>
          <Layout />
        </Router>
    </BrowserRouter>
  );
}

export default App;
