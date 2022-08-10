import { useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from "react-icons/hi";

import { toast } from 'react-toastify';

export default function Header() {
  const navigate = useNavigate();

  const handleBrandClick = () => {
    navigate('')
  }

  const handleLogoutClick = () => {
    toast.info("See you later!");
    navigate('');
  }

  return (
    <header className="navbar bg-white rounded-xl overflow-hidden">
      <div className="navbar-start">
        <div className="dropdown">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </button>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="http">Invoices</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center" onClick={handleBrandClick}>
        <span className="btn btn-ghost normal-case text-xl">Invoice Me</span>
      </div>
      <div className="navbar-end">
        <button onClick={handleLogoutClick} className="btn btn-ghost btn-circle">
          <div className="indicator text-primary-main">
            <HiOutlineLogout size={26}  />
          </div>
        </button>
      </div>
    </header>
  )
}