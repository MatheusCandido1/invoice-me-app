export default function CreateCustomer() {
  return (
    <>
    <header className="w-full h-14 flex flex-col justify-start items-start p-4">
          <h4 className="text-dark-main font-bold text-lg">Novo Cliente</h4>
          <p className="text-gray-main font-semibold text-sm">Cadastre um novo cliente</p>
        </header>
    <div className="p-4">
          <div className="flex">
            <div className="w-full">
              <label  className="text-xs font-semibold px-1">Nome da empresa:</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-domain text-gray-400 text-lg"></i></div>
                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="Empresa LTDA" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <label  className="text-xs font-semibold px-1">CNPJ/Identificador:</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-file-document text-gray-400 text-lg"></i></div>
                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="00.000.000/0000-00" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <label className="text-xs font-semibold px-1">E-mail:</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email text-gray-400 text-lg"></i></div>
                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="contato@empresa.com.br" />
              </div>
            </div>
          </div>
          <div className="flex w-full mt-4 flex-col gap-2">
            <button  type="button" className="w-full bg-primary-main text-white hover:bg-primary-dark flex items-center justify-center font-semibold rounded-lg text-sm h-10 rounded">Salvar</button>
          </div>
        </div>
        </>
  )
}