import { Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Invoices from './pages/Invoices';

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/invoices" element={<Invoices />} />
    </Routes>
  )
}