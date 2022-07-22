import Panel from "../../../components/Panel"

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignUp() {

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    toast.info("Welcome!");
    navigate('/');
  }

  const handleLoginClick = () => {
    navigate('/sign-in');
  }

  return (
    <div className="flex-1 justify-center items-center flex h-screen px-4">
      <Panel width="w-full lg:w-1/3" height="h-auto">
        <header className="w-full h-14 flex flex-col justify-start items-center p-4">
          <h4 className="text-dark-main font-bold text-lg mt-4">Criar Conta</h4>
          <p className="text-gray-main font-semibold text-sm">Criar sua conta e gerencie seus invoices</p>
        </header>
        <section className="w-full flex justify-center flex-col mt-2 p-8 w-full">
          <div className="flex">
            <div className="w-full px-3">
              <label  className="text-xs font-semibold px-1">Nome Completo:</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-arrow-right-outline text-gray-400 text-lg"></i></div>
                <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="johnsmith@example.com" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full px-3">
              <label  className="text-xs font-semibold px-1">E-mail:</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="johnsmith@example.com" />
              </div>
            </div>
          </div>
          <div className="flex my-2">
            <div className="w-full px-3">
              <label  className="text-xs font-semibold px-1">Senha:</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="************" />
              </div>
            </div>
          </div>
                    <div className="flex my-2">
                        <div className="w-full px-3">
                            <label  className="text-xs font-semibold px-1">Confirmar Senha:</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="************" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex w-full px-3 my-2 flex-col gap-2">
                      <button onClick={handleRegisterClick} type="button" className="w-full bg-primary-main text-white hover:bg-primary-dark flex items-center justify-center font-semibold rounded-xl text-sm h-10 rounded">Criar Conta</button>
                      
                      <button onClick={handleLoginClick} type="button" className="w-full text-primary-main hover:bg-gray-200 flex items-center justify-center font-semibold rounded-xl text-sm h-10 rounded">Já tem login? Entrar!</button>
                    </div>
        </section>
      </Panel>
    </div>
  )
}