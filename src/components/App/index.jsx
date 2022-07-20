
import { BrowserRouter } from "react-router-dom";

import Header from '../Header';
import Footer from '../Footer';


import Router from '../../router';

import "./styles.css";


function App() {
  return (
    <BrowserRouter>
        <main>
          <Header />
          <Router />
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
