import { useState, useEffect, useCallback } from 'react';
import Panel from '../../components/Panel';

import AccountItem from '../../components/Accounts/AccountItem';
import CreateAccount from '../../components/Accounts/CreateAccount';
import EditAccount from '../../components/Accounts/EditAccount';

import { toast } from 'react-toastify';

import AccountService from "../../services/AccountService";

import Loader from "react-spinners/ScaleLoader";
import DeleteAccount from '../../components/Accounts/DeleteAccount';
import Lottie from 'react-lottie';

import emptyState from '../../assets/lotties/empty.json'

const override = {
  margin: "0 auto",
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function Accounts() {
  const [account, setAccount] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const getAccounts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await AccountService.listAccounts();
      setAccounts(response.data.data);
    } catch (e) {
      toast.error(e.response.data.message);
    } finally {
      setLoading(false)
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    getAccounts();
  }, [getAccounts]);

  const updateExistingAccount = (existingAccount) => {
    setAccounts(current =>
      current.map(account => {
        if (account.id === existingAccount.id) {
          return {...existingAccount, account};
        }
        return account;
      }),
    );
  }

  const removeAccount = (existingAccount) => {
    setAccounts(current =>
      current.filter(account => account.id !== existingAccount.id)
    );
  }

  const handleDeleteClick = (account) => {
    setShowDeleteModal(true);
    setAccount(account)
  }


  const deleteAccount = useCallback(async (account) => {
    try {
      setLoading(true);
      const response = await AccountService.deleteAccount(account);
      toast.success(response.data.message)
      removeAccount(response.data.data);
    } catch (e) {
      toast.error(e.response.data.message);
    } finally {
      setLoading(false)
      setShowDeleteModal(false)
      setAccount(null)
    }
  }, []);

  const handleEditClick = (currentAccount) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setAccount(currentAccount);
  }

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
    setAccount(null);
  }

  const GridLoading = () => {
    return (
      <Loader color={'#1F54CF'} loading={loading} cssOverride={override} size={200} />
    )
  }

  const AccountHeader = () => {
    return (
      <header className="hidden w-full sm:flex items-center flex-wrap md:flex-nowrap md:gap-4 p-4">
      <div className="w-5/12 md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
          <span className="font-bold text-dark-main">Número da conta</span>
        </div>
        <div className="w-5/12 md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
          <span className="font-bold text-dark-main">Código BIC</span>
        </div>
        <div className="w-2/12 md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-0 order-3 md:order-2">
          <span className="font-bold text-dark-main">Ações</span>
        </div>
      </header>
    );
  }

  const AccountFooter = () => {
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

  const EmptyAccountsList = () => {

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: emptyState,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <section className="flex flex-col justify-center items-center">
      <p className="font-semibold text-gray-600">Você não tem nenhuma conta cadastrada!</p>
      <Lottie options={defaultOptions}
        height={200}
        width={200}
      />
      </section>
    )
  }

  return (
    <section className="mt-6 flex flex-col-reverse lg:flex-row w-full gap-4">
      <Panel width="`lg:w-4/6 sm:w-full" height="h-auto">
        <header className="w-full h-14 flex flex-col justify-start items-start p-4">
          <h4 className="text-dark-main font-bold text-lg">Contas</h4>
          <p className="text-gray-main font-semibold text-sm">Gerencie suas contas bancárias</p>
        </header>
        
        <div className="p-4 w-full">
          <section className="flex flex-col w-full mt-4 gap-4">
            {accounts.length > 0 && <AccountHeader /> }
            <GridLoading />
            {accounts.length === 0 && !loading && <EmptyAccountsList /> }
            {accounts.map((account) => {
              return (
                <AccountItem 
                  key={account.id}
                  account={account} 
                  onEditClick={() => handleEditClick(account)}
                  onDeleteClick={() => handleDeleteClick(account)}
                 />
              )
            })}
          </section>
          {accounts && accounts.length > 4 && <AccountFooter /> }
        </div>
      </Panel>
      <Panel width="lg:w-2/6 sm:w-full" height="h-auto">
        {!account ? 
          <CreateAccount onCreateAccount={(newAccount) => setAccounts(accounts => [...accounts, newAccount])} />
          :
          <EditAccount onUpdateAccount={(updatedAccount) => updateExistingAccount(updatedAccount)} account={account} onCancelClick={() => setAccount(null)} />
        }
      </Panel>
      {showDeleteModal && 
        <DeleteAccount
          onCloseDeleteAccount={() => hideDeleteModal()}
          onDeleteAccount={() => deleteAccount(account)}
        /> 
      }
    </section>
  )
}