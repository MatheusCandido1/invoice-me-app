import Button from '../../components/Button';
import Panel from '../../components/Panel';

import InvoiceItem from '../../components/Invoices/InvoiceItem';

export default function Invoices() {
  return (
    <section className="mt-6">
      <Panel width="w-full" height="h-full">
        <header className="w-full h-auto flex justify-between items-center p-4">
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
            <div className="flex justify-center w-full flex-col md:flex-row items-center gap-2 bg-gray-200 rounded-lg p-3 md:w-auto">
              <div className="w-full">
                <label  className="text-xs font-semibold px-1">Data Inicio:</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-calendar text-gray-400 text-lg"></i></div>
                  <input type="date" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="Data de Inicio" />
                </div>
              </div>
              <div className="w-full">
                <label  className="text-xs font-semibold px-1">Data Fim:</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-calendar text-gray-400 text-lg"></i></div>
                  <input type="date" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="Data de Inicio" />
                </div>
              </div>

              <div className="w-full">
                <label  className="text-xs font-semibold px-1">Status:</label>
                <div className="flex">
                  <select className="w-full px-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" defaultValue={1}>
                  <option value="1" disabled>Selecione..</option>
                  <option value="2">Em andamento</option>
                  <option value="3">Pago</option>
                </select>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full mt-4 gap-4">
            <InvoiceItem date="01/01" total={4830.00} company="Dynaccurate SARL" status={2}  />
            <InvoiceItem date="01/02" total={5030.00} company="Dynaccurate SARL" status={1}  />
          </section>
          <footer className="btn-group flex justify-end items-center mt-4 ">
            <button className="btn bg-primary-main border-none hover:bg-primary-dark">
              <i className="mdi mdi-chevron-double-left"></i>
            </button>
            <button className="btn bg-primary-main border-none hover:bg-primary-dark">Página 1</button>
            <button className="btn bg-primary-main border-none hover:bg-primary-dark">
              <i className="mdi mdi-chevron-double-right"></i>
            </button>
          </footer>
        </div>
      </Panel>
    </section>
  );
}