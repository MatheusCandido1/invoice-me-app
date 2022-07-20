import { Outlet } from "react-router-dom";

import Header from '../Header';
import Footer from '../Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles.css";

export default function Layout() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
        <ToastContainer
          position="top-right"
        />
      </main>
      <Footer />
    </>
  )
}