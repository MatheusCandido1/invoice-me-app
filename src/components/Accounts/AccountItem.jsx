import propTypes from 'prop-types';

import { TbPencil, TbTrash } from "react-icons/tb";

export default function AccountItem({onDeleteClick, onEditClick, account}) {

  const handleEditClick = () => {
    onEditClick();
  }

  const handleDeleteClick = () => {
    onDeleteClick();
  }

  return (
    <div className="w-full flex items-center flex-wrap md:flex-nowrap md:gap-4 p-4 hover:bg-gray-100 rounded-lg cursor-pointer">
      <div onClick={handleEditClick} className="w-full md:w-5/12 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
        <span className="font-bold text-dark-main">{account.number}</span>
      </div>
      <div onClick={handleEditClick} className="w-full md:w-5/12 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
        <span className="font-bold text-dark-main">{account.bic_code}</span>
      </div>
      <div className="w-full md:w-2/12 flex items-center justify-center mt-4 md:mt-0 order-4">
        <section className="w-full flex justify-center flex-row items-center gap-1">
          <button onClick={handleEditClick} className="flex flex-col bg-primary-main hover:bg-primary-dark justify-center items-center p-2 rounded-lg">
            <TbPencil color={'#FFF'} size={16} />
          </button>
          <button onClick={handleDeleteClick} className="flex flex-col bg-danger-main justify-center items-center p-2 rounded-lg hover:bg-danger-dark">
            <TbTrash color={'#FFF'} size={16} />
          </button>
        </section>
      </div>
</div>
  )
}

AccountItem.propTypes = {
  onEditClick: propTypes.func.isRequired,
  account: propTypes.object.isRequired,
}