import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Invoices from "./pages/Invoices";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import Layout from "./components/Layout";
import Accounts from "./pages/Accounts";
import Customers from "./pages/Customers";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/customers" element={<Customers />} />
      </Route>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}