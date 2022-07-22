
import { TbPencil, TbTrash } from "react-icons/tb";

export default function CustomerItem({onEditClick}) {

  const handleEditClick = () => {
    onEditClick();
  }

  return (
    <div className="w-full flex items-center flex-wrap md:flex-nowrap md:gap-4 p-4 hover:bg-gray-100 rounded-lg cursor-pointer">
      <div className="w-full md:w-5/12 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
        <span className="font-bold text-dark-main">Dynaccurate SARL</span>
      </div>
      <div className="w-full md:w-5/12 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
        <span className="font-bold text-dark-main">LU32183814</span>
      </div>
      <div className="w-full md:w-5/12 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
        <span className="font-bold text-dark-main">dermot.doyle@dynaccurate.com</span>
      </div>
      <div className="w-full md:w-2/12 flex items-center justify-center mt-4 md:mt-0 order-4">
        <section className="w-full flex justify-center flex-row items-center gap-1">
          <button onClick={handleEditClick} className="flex flex-col bg-primary-main justify-center items-center p-2 rounded-lg">
            <TbPencil color={'#FFF'} size={16} />
          </button>
          <button className="flex flex-col bg-danger-main justify-center items-center p-2 rounded-lg">
            <TbTrash color={'#FFF'} size={16} />
          </button>
        </section>
      </div>
    </div>
  )

}