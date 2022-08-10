import { useState } from 'react';

import PropTypes from 'prop-types';


import { toast } from 'react-toastify';

import AccountService from "../../services/AccountService";

export default function EditAccount({onUpdateAccount, onCancelClick, account}) {

  
  const [number, setNumber] = useState(account.number);
  const [beneficiary, setBeneficiary] = useState(account.beneficiary);
  const [bicCode, setBicCode] = useState(account.bic_code);

  const handleCancelClick = () => {
    onCancelClick();
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const payload = {
        id: account.id,
        number,
        beneficiary,
        bic_code: bicCode
      }
      
      const response = await AccountService.updateAccount(payload);

      toast.success(response.data.message);
      onUpdateAccount(response.data.data);
      handleCancelClick();

    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <>
    <header className="w-full h-14 flex flex-col justify-start items-start p-4">
          <h4 className="text-dark-main font-bold text-lg">Atualizar Conta</h4>
          <p className="text-gray-main font-semibold text-sm">Atualize uma conta bancária já existente</p>
        </header>
    <form onSubmit={handleSubmit} className="p-4">
          <div className="flex">
            <div className="w-full">
              <label  className="text-xs font-semibold px-1">Número da conta:</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-credit-card-plus-outline text-gray-400 text-lg"></i></div>
                <input onChange={(e) => setNumber(e.target.value)} value={number} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="BRXXXXXXXXXXXXX" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <label  className="text-xs font-semibold px-1">Código BIC:</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-note-text text-gray-400 text-lg"></i></div>
                <input onChange={(e) => setBicCode(e.target.value)} value={bicCode}  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main" placeholder="OURXXXXXXX" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <label className="text-xs font-semibold px-1">Beneficiário:</label>
              <div className="flex">
                <textarea onChange={(e) => setBeneficiary(e.target.value)} value={beneficiary} style={{minHeight: '6rem'}} rows={3} className="w-full pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary-main"  />
              </div>
            </div>
          </div>
          <div className="flex w-full mt-4 flex gap-2">
            <button  type="submit" className="w-3/4 bg-primary-main text-white hover:bg-primary-dark flex items-center justify-center font-semibold rounded-lg text-sm h-10 rounded">Atualizar</button>
            <button onClick={handleCancelClick}  type="button" className="w-1/4 bg-gray-light text-white hover:bg-gray-main flex items-center justify-center font-semibold rounded-lg text-sm h-10 rounded">Cancelar</button>
          </div>
        </form>
        </>
  )
}

EditAccount.propTypes = {
  onCancelClick: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired
}