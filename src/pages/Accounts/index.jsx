import { useState } from 'react';
import Panel from '../../components/Panel';

import AccountItem from '../../components/Accounts/AccountItem';
import CreateAccount from '../../components/Accounts/CreateAccount';
import EditAccount from '../../components/Accounts/EditAccount';

export default function Accounts() {
  const [account, setAccount] = useState(null);

  const handleEditClick = (currentAccount) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setAccount(currentAccount);
  }

  const AccountHeader = () => {
    return (
      <header className="hidden w-full sm:flex items-center flex-wrap md:flex-nowrap md:gap-4 p-4">
      <div className="w-5/12 md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
          <span className="font-bold text-dark-main">Número da conta</span>
        </div>
        <div className="w-5/12 md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
          <span className="font-bold text-dark-main">Código BIC</span>
        </div>
        <div className="w-2/12 md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
          <span className="font-bold text-dark-main">Ações</span>
        </div>
      </header>
    );
  }

  const AccountFooter = () => {
    return (
      <footer className="flex justify-center lg:justify-end items-center mt-4 w-full gap-2" >
        <button className="btn bg-primary-main border-none hover:bg-primary-dark">
          <i className="mdi mdi-chevron-double-left"></i>
        </button>
        <button className="btn bg-primary-main border-none hover:bg-primary-dark">Página 1</button>
        <button className="btn bg-primary-main border-none hover:bg-primary-dark">
          <i className="mdi mdi-chevron-double-right"></i>
        </button>
      </footer>
    );
  }

  return (
    <section className="mt-6 flex flex-col-reverse lg:flex-row w-full gap-4">
      <Panel width="lg:w-4/6 sm:w-full" height="h-auto">
        <header className="w-full h-14 flex flex-col justify-start items-start p-4">
          <h4 className="text-dark-main font-bold text-lg">Contas</h4>
          <p className="text-gray-main font-semibold text-sm">Gerencie suas contas bancárias</p>
        </header>
        
        <div className="p-4 w-full">
          <section className="flex flex-col w-full mt-4 gap-4">
            <AccountHeader />
            <AccountItem onEditClick={() => handleEditClick({id: 1})} />
          </section>
          <AccountFooter />
        </div>
      </Panel>
      <Panel width="lg:w-2/6 sm:w-full" height="h-auto">
        {!account ? 
          <CreateAccount />
          :
          <EditAccount onCancelClick={() => setAccount(null)} />
        }
      </Panel>
    </section>
  )
}