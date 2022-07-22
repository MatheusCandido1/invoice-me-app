import { useState } from 'react';

import Panel from '../Panel';
import Button from '../Button';

import { TbCoin, TbFileDescription, TbUsers } from "react-icons/tb";


import Helper from "../../util/Helper";

export default function Stats() {
  
  const [billing] = useState(0);
  const [invoices] = useState(0);
  const [customers] = useState(0);

  const [filter, setFilter] = useState('monthly');

  function handleFilterClick (value) {
    setFilter(value);
  }

  return (
    <Panel width="lg:w-4/6 sm:w-full" height="h-auto">
        <header className="w-full h-14 flex justify-between items-center p-4">
          <h4 className="text-dark-main font-bold text-lg">Dashboard</h4>
          <div className="flex gap-1 bg-gray-buttonBackground p-1 rounded-lg">
              <Button size="small" label="Mensal" type={`${filter === 'monthly' ? "secondary" : "light"}`} onClick={() => handleFilterClick('monthly')}  />
              <Button size="small" label="Anual" type={`${filter === 'yearly' ? "secondary" : "light"}`} onClick={() => handleFilterClick('yearly')}  />
          </div>
        </header>
        <div className="p-4 flex flex-col sm:flex-row items-center gap-4">
          <section className="flex flex-col bg-primary-lightest py-2 px-4 rounded-lg lg:w-1/3 w-full">
            <div className="flex justify-between items-center">
              <span className="font-bold">{Helper.formatCurrency(billing)}</span>
              <TbCoin size={24} />
            </div>
            <p className="text-gray-main font-semibold mt-1">Faturamento</p>
          </section>
          <section className="flex flex-col bg-primary-lightest py-2 px-4 rounded-lg lg:w-1/3 w-full">
            <div className="flex justify-between items-center">
              <span className="font-bold">{invoices}</span>
              <TbFileDescription size={24} />
            </div>
            <p className="text-gray-main font-semibold mt-1">Invoices</p>
          </section>
          <section className="flex flex-col bg-primary-lightest py-2 px-4 rounded-lg lg:w-1/3 w-full">
            <div className="flex justify-between items-center">
              <span className="font-bold">{customers}</span>
              <TbUsers size={24} />
            </div>
            <p className="text-gray-main font-semibold mt-1">Clientes</p>
          </section>
        </div>
      </Panel>
  );
}