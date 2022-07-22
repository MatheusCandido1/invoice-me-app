import PropTypes from 'prop-types';

import { TbCoin, TbPencil, TbTrash } from "react-icons/tb";

import Helper from "../../util/Helper";

export default function InvoiceItem({date, total, company, status}) {

  const getBadgeColor = (status) => {
    switch(status) {
      case 1: 
        return 'bg-primary-lighter text-primary-main'
      case 2: 
        return 'bg-success-main text-white'
    default:    
      return 'bg-primary-lighter text-primary-main'
    }
  }

  const getBadgeValue = (status) => {
    switch(status) {
      case 1: 
        return 'Em andamento'
      case 2: 
        return 'Pago'
    default:    
      return 'Em andamento'
    }
  }

  return (
    <div className="w-full flex items-center flex-wrap md:flex-nowrap md:gap-4 p-1.5 hover:bg-gray-200 rounded-lg cursor-pointer">
            <div className="w-1/2 flex justify-center md:w-1/12 order-1">
              <div className="rounded-full w-12 h-12 border-2 border-gray-300 p-2 flex justify-center items-center">
                <p className="text-sm font-bold text-gray-dark">{date}</p>
              </div>
            </div>
            <div className="w-1/2 md:w-4/12 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
              <span className="font-bold text-dark-main">{Helper.formatCurrency(total)}</span>
              <span className="font-semibold text-gray-dark text-center">{company}</span>
            </div>
            <div className="w-1/2 md:w-4/12 flex justify-center items-center mt-4 md:mt-0 order-2 md:order-3">
              <div className={`${getBadgeColor(status)} py-0.5 px-2 rounded-lg font-bold text-sm whitespace-nowrap`}>{getBadgeValue(status)}</div>
            </div>
            <div className="w-1/2 md:w-4/12 flex items-center justify-center mt-4 md:mt-0 order-4">
              <section className="w-full flex justify-center flex-row items-center gap-1">
                <button className="flex flex-col bg-primary-main justify-center items-center p-2 rounded-lg">
                  <TbPencil color={'#FFF'} size={16} />
                </button>
                <button className="flex flex-col bg-danger-main justify-center items-center p-2 rounded-lg">
                  <TbTrash color={'#FFF'} size={16} />
                </button>
                {status === 1 &&
                  <button className="flex flex-col bg-success-main justify-center items-center p-2 rounded-lg">
                    <TbCoin color={'#FFF'} size={16} />
                  </button>
                }
              </section>
            </div>
          </div>
  )
}

InvoiceItem.propTypes = {
  date: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
 }