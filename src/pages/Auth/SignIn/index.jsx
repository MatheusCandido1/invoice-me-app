import { useState, useEffect } from "react";
import Panel from "../../../components/Panel"

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import AuthService from "../../../services/AuthService";

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  const navigate = useNavigate();

  const resetForm = () => {
    setPassword('');
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const payload = {
        email, password
      }
      
      const response = await AuthService.signIn(payload);

      const loggedUser  = response.data
  
      localStorage.setItem("@Auth:token", loggedUser.token)
      localStorage.setItem("@Auth:token", loggedUser.token)
      localStorage.setItem("@User:company", 1)
      toast.success('Welcome');
      navigate('dashboard')

    } catch (e) {
      resetForm();
      toast.error(e.response.data.message);
    }
  }

  const handleRegisterClick = () => {
    navigate('/sign-up');
  }

  return (
    <div className="flex-1 justify-center items-center flex h-screen px-4">
      <Panel width="w-full lg:w-1/3" height="h-auto">
        <header className="w-full h-14 flex flex-col justify-start items-center p-4">
          <h4 className="text-dark-main font-bold text-lg mt-4">Login</h4>
          <p className="text-gray-main font-semibold text-sm">Seja bem vindo ao InvoiceMe</p>
        </header>
        <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col mt-2 p-8 w-full">
          <div className="flex">
                        <div className="w-full px-3">
                            <label  className="text-xs font-semibold px-1">E-mail:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input  onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="Type your e-mail" />
                            </div>
                        </div>
                    </div>
                    <div className="flex my-2">
                        <div className="w-full px-3">
                            <label  className="text-xs font-semibold px-1">Senha:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="Type your password" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex w-full px-3 my-2 flex-col gap-2">
                      <button type="submit" className="w-full bg-primary-main text-white hover:bg-primary-dark flex items-center justify-center font-semibold rounded-xl text-sm h-10 rounded">Entrar</button>
                      
                      <button onClick={handleRegisterClick} type="button" className="w-full text-primary-main hover:bg-gray-200 flex items-center justify-center font-semibold rounded-xl text-sm h-10 rounded">Criar Conta</button>
                    </div>
        </form>
      </Panel>
    </div>
  )
}