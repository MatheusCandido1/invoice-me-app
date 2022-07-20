import { Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Invoices from './pages/Invoices';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Layout from './components/Layout';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/invoices" element={<Invoices />} />
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-ip" element={<SignUp />} />
    </Routes>
  )
}