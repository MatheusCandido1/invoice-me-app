import Button from '../Button';
import Panel from '../Panel';

import { TbCoin, TbMail, TbPencil, TbTrash } from "react-icons/tb";

export default function Invoice() {
  return (
    <Panel width="w-3/6" height="h-full">
      <header className="w-full h-14 flex flex-col justify-start items-start p-4">
        <h4 className="text-dark-main font-bold text-lg">Invoices</h4>
        <p className="text-gray-main font-semibold text-sm">Nesse painel, você consegue ver todos seus invoices.</p>
      </header>
      <div className="p-4">
        <section className="w-full bg-primary-lightest rounded-xl flex items-center justify-between p-2 mt-2">
          <div className="flex items-center">
            <TbMail color={'#1C4BB8'} size={24} />
            <p className="ml-2 font-semibold text-gray-dark">matheus.candido@invoice.me</p>
          </div>
          <Button size="medium" label="Novo Invoice" type="primary" />
        </section>

        <section className="flex flex-col w-full mt-4 gap-4">
          <div className="w-full flex items-center gap-4 p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div className="w-1/12">
              <div className="rounded-full w-12 h-12 border-2 border-gray-300 p-2 flex justify-center items-center">
                <p className="text-sm font-bold text-gray-dark">01/12</p>
              </div>
            </div>
            <div className="w-4/12 flex flex-col justify-center items-center">
              <span className="font-bold text-dark-main">R$ 4830,00</span>
              <span className="font-semibold text-gray-dark">Dynaccurate Sarl</span>
            </div>
            <div className="w-4/12 flex justify-center items-center">
              <div class="py-0.5 px-2 rounded-lg bg-primary-lighter text-primary-main font-bold text-sm">Em andamento</div>
            </div>
            <div className="w-4/12 flex justify-end items-center gap-2">
              <button className="flex flex-col bg-primary-main justify-center items-center p-2 rounded-lg">
                <TbPencil color={'#FFF'} size={16} />
              </button>
              <button className="flex flex-col bg-danger-main justify-center items-center p-2 rounded-lg">
                <TbTrash color={'#FFF'} size={16} />
              </button>
              <button className="flex flex-col bg-success-main justify-center items-center p-2 rounded-lg">
                <TbCoin color={'#FFF'} size={16} />
              </button>
            </div>
          </div>
          <footer>

          </footer>
        </section>
      </div>
    </Panel>
  )
}