import { useEffect } from 'react';

import Button from '../../components/Button';
import Panel from '../../components/Panel';

import InvoiceItem from '../../components/Invoices/InvoiceItem';

export default function Invoices() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const InvoiceFooter = () => {
    return (
      <footer className="flex justify-center lg:justify-end items-center mt-4 w-full gap-2" >
        <button className="btn bg-primary-main border-none hover:bg-primary-dark">
          <i className="mdi mdi-chevron-double-left text-white"></i>
        </button>
        <button className="btn bg-primary-main border-none hover:bg-primary-dark text-white">Página 1</button>
        <button className="btn bg-primary-main border-none hover:bg-primary-dark">
          <i className="mdi mdi-chevron-double-right text-white"></i>
        </button>
      </footer>
    );
  }

  return (
    <section className="mt-6">
      <Panel width="w-full" height="h-full">
        <header className="w-full h-auto flex flex-col lg:flex-row justify-between items-center p-4">
          <div className="flex flex-col">
            <h4 className="text-dark-main font-bold text-lg">Invoices</h4>
            <p className="text-gray-main font-semibold text-sm">Nesse painel, você consegue ver todos seus invoices.</p>
          </div>
          <div className="flex items-center justify-center">
            <Button size="medium" label="Novo Invoice" type="primary" />
          </div>
        </header>
        <div className="p-4">
          <section className="w-full flex items-center justify-center">
            <div className="flex justify-center w-full flex-col md:flex-row items-center gap-2 bg-gray-100 rounded-lg p-3 md:w-auto">
              <section className="flex gap-2">
              <div className="w-1/2">
                <label  className="text-xs font-semibold px-1">Data Inicio:</label>
                <div className="flex">
                  <input type="date" className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main bg-white" placeholder="Data de Inicio" />
                </div>
              </div>
              <div className="w-1/2">
                <label  className="text-xs font-semibold px-1">Data Fim:</label>
                <div className="flex">
                  <input type="date" className="w-full px-3 py-2  rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main bg-white" placeholder="Data de Inicio" />
                </div>
              </div>
              </section>

              <div className="w-full">
                <label  className="text-xs font-semibold px-1">Status:</label>
                <div className="flex">
                  <select className="w-full px-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main bg-white" defaultValue={1}>
                  <option value="1" disabled>Selecione..</option>
                  <option value="2">Em andamento</option>
                  <option value="3">Pago</option>
                </select>
                </div>
              </div>
              <div className="lg:hidden w-full justify-end items-center mt-3">
                <button  type="button" className="w-full bg-success-main text-white hover:bg-primary-dark flex items-center justify-center font-semibold rounded-lg text-sm h-10 rounded">Buscar</button>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full mt-4 gap-4">
            <InvoiceItem date="01/01" total={4830.00} company="Dynaccurate SARL" status={2}  />
            <InvoiceItem date="01/02" total={5030.00} company="Dynaccurate SARL" status={1}  />
          </section>
          <InvoiceFooter />
        </div>
      </Panel>
    </section>
  );
}