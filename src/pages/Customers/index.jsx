import { useState } from 'react';
import Panel from '../../components/Panel';

import CustomerItem from '../../components/Customers/CustomerItem';
import CreateCustomer from '../../components/Customers/CreateCustomer';
import EditCustomer from '../../components/Customers/EditCustomer';

export default function Accounts() {
  const [customer, setCustomer] = useState(null);

  const handleEditClick = (currentCustomer) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setCustomer(currentCustomer);
  }

  const CustomerHeader = () => {
    return (
      <header className="hidden w-full sm:flex items-center flex-wrap md:flex-nowrap md:gap-4 p-4">
        <div className="w-3/12 md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
          <span className="font-bold text-dark-main">Empresa</span>
        </div>
        <div className="w-3/12 md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
          <span className="font-bold text-dark-main">CNPJ/Identificador</span>
        </div>
        <div className="w-3/12 md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
          <span className="font-bold text-dark-main">E-mail</span>
        </div>
        <div className="w-3/12 md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
          <span className="font-bold text-dark-main">Ações</span>
        </div>
      </header>
    );
  }

  const CustomerFooter = () => {
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
          <h4 className="text-dark-main font-bold text-lg">Clientes</h4>
          <p className="text-gray-main font-semibold text-sm">Gerencie seus clientes</p>
        </header>
        
        <div className="p-4 w-full">
          <section className="flex flex-col w-full mt-4 gap-4">
            <CustomerHeader />
            <CustomerItem onEditClick={() => handleEditClick({id: 1})}  />
          </section>
          <CustomerFooter />
        </div>
      </Panel>
      <Panel width="lg:w-2/6 sm:w-full" height="h-auto">
        {!customer ? 
          <CreateCustomer />
          :
          <EditCustomer onCancelClick={() => setCustomer(null)} />
        }
      </Panel>
    </section>
  )
}