import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import Panel from '../Panel';

import { BsArrowUpRight } from "react-icons/bs";

import InvoiceItem from '../InvoiceItem';

export default function Invoice() {
  
  const navigate = useNavigate();

  const handleSeeAllInvoicesClick = () => {
    navigate('invoices')
  }
  
  return (
    <Panel width="lg:w-3/6 sm:w-full" height="h-full">
      <header className="w-full h-14 flex flex-col justify-start items-start p-4">
        <h4 className="text-dark-main font-bold text-lg">Invoices</h4>
        <p className="text-gray-main font-semibold text-sm">Nesse painel, você consegue ver todos seus invoices.</p>
      </header>
      <div className="p-4">
        <section className="w-full flex items-center justify-end p-2">
          <Button size="medium" label="Novo Invoice" type="primary" />
        </section>
        <section className="flex flex-col w-full mt-4 gap-4">
          <InvoiceItem date="01/01" total={4830.00} company="Dynaccurate SARL" status={2}  />
          <InvoiceItem date="01/02" total={5030.00} company="Dynaccurate SARL" status={1}  />
          
          <section onClick={handleSeeAllInvoicesClick} className="flex justify-end items-center gap-2 hover:underline text-gray-main cursor-pointer">
            <p className="font-semibold text-sm h">Ver todos invoices</p>
            <BsArrowUpRight size={16} />
          </section>
        </section>
      </div>
    </Panel>
  )
}