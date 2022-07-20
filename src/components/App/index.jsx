
import { BrowserRouter } from "react-router-dom";

import Header from '../Header';
import Footer from '../Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from '../../router';

import "./styles.css";


function App() {
  return (
    <BrowserRouter>
        <main>
          <Header />
          <Router />
          <ToastContainer
            position="top-right"
          />
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
