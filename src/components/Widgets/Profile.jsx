import Panel from '../Panel';

export default function Profile() {
    return (
    <Panel width="lg:w-2/6 sm:w-full" height="h-40">
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
        <div className="py-0.5 px-2 rounded-lg bg-primary-lighter text-primary-main font-bold text-sm">Online</div>
      </div>
    </div>
  </Panel>
  )
}