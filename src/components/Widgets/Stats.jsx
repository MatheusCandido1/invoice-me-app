import { useState } from 'react';

import Panel from '../Panel';
import Button from '../Button';

import { TbCoin, TbFileDescription, TbUsers } from "react-icons/tb";


import Helper from "../../util/Helper";

export default function Stats() {
  
  const [billing] = useState(0);
  const [invoices] = useState(0);
  const [customers] = useState(0);

  return (
    <Panel width="w-4/6" height="h-44">
        <header className="w-full h-14 flex justify-between items-center p-4">
          <h4 className="text-dark-main font-bold text-lg">Dashboard</h4>
          <div className="flex gap-1 bg-gray-buttonBackground p-1 rounded-lg">
            <Button size="small" label="Mensal" type="secondary" />
            <Button size="small" label="Anual" type="light" />
          </div>
        </header>
        <div className="p-4 flex items-center gap-4">
          <section className="flex flex-col bg-primary-lightest py-2 px-4 rounded-lg w-1/3">
            <div className="flex justify-between items-center">
              <span className="font-bold">{Helper.formatCurrency(billing)}</span>
              <TbCoin size={24} />
            </div>
            <p className="text-gray-main font-semibold mt-1">Faturamento</p>
          </section>
          <section className="flex flex-col bg-primary-lightest py-2 px-4 rounded-lg w-1/3">
            <div className="flex justify-between items-center">
              <span className="font-bold">{invoices}</span>
              <TbFileDescription size={24} />
            </div>
            <p className="text-gray-main font-semibold mt-1">Invoices</p>
          </section>
          <section className="flex flex-col bg-primary-lightest py-2 px-4 rounded-lg w-1/3">
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