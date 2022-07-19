import Panel from '../Panel';

import { HiOutlineLogout } from "react-icons/hi";
export default function Profile() {
  return (
    <Panel width="w-2/6" height="h-44">
    <header className="w-full h-14 flex justify-between items-center p-4">
      <h4 className="text-dark-main font-bold text-lg">Perfil</h4>
    </header>
    
    <div className="px-4 flex items-center justify-between">
      <img alt="avatar" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" className="w-16 h-16" />
      <div className="ml-2">
        <p className="font-bold">Matheus Cândido</p>
        <p className="font-medium text-gray-main">Software Engineer</p>
      </div>
      <div className="ml-2">
        <div class="py-0.5 px-2 rounded-lg bg-primary-lighter text-primary-main font-bold text-sm">Online</div>
      </div>
    </div>
    
    <div className="flex w-full px-4 mt-3">
      <div className="w-full hover:text-white hover:bg-primary-main cursor-pointer flex border-2 text-primary-main border-primary-main rounded-lg px-2 justify-center items-center">
        <HiOutlineLogout size={26}  />
        <p className="font-semibold">Logout</p>
      </div>
    </div>
  </Panel>
  )
}