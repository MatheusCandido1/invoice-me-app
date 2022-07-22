import Panel from '../Panel';

import { BiWallet, BiUserPlus } from "react-icons/bi";

import { useNavigate } from 'react-router-dom';

export default function Config() {
  const navigate = useNavigate();

  const handleAccountsClick = () => {
    navigate('accounts')
  }

  const handleCustomersClick = () => {
    navigate('customers')
  }

  return (
    <Panel width="lg:w-3/6 sm:w-full" height="h-40">
      <header className="w-full h-14 flex flex-col justify-start items-start p-4">
        <h4 className="text-dark-main font-bold text-lg">Configurações</h4>
        <p className="text-gray-main font-semibold text-sm">Gerencie contas e clientes.</p>
      </header>
      <section className="w-full flex flex-col p-4 gap-4">
        <div className="flex gap-4 w-full">
          <div onClick={handleAccountsClick} className="modal-button w-1/2 hover:text-white hover:bg-primary-main cursor-pointer text-primary-main flex border-2 border-primary-main rounded-lg px-2 h-16 justify-center items-center flex-col">
            <BiWallet size={26} />
            <p className=" font-semibold">Contas</p>
          </div>
          <div onClick={handleCustomersClick} className="w-1/2 hover:text-white hover:bg-primary-main cursor-pointer flex border-2 text-primary-main border-primary-main rounded-lg px-2 h-16 justify-center items-center flex-col">
            <BiUserPlus size={26}  />
            <p className="font-semibold">Clientes</p>
          </div>
        </div>
      </section>
    </Panel>
  );
}