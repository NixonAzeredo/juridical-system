import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Modal from "../Modal";

interface SubPanelProps {
  title: string;
  sendSearch: (search: string) => void;
  sendCreate: (data: { name: string; symbol: string }) => void;
}

function SubPanel({ title, sendSearch, sendCreate }: SubPanelProps) {
  const [search, setSearch] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const changeStateOfModal = (state: boolean) => {
    setIsOpenModal(state);
  };

  const sendWordForSearch = () => {
    sendSearch(search);
  };

  const sendDataForCreateIndexer = (data: { name: string; symbol: string }) => {
    sendCreate(data);
    changeStateOfModal(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        changeState={changeStateOfModal}
        sendFormToUpdate={sendDataForCreateIndexer}
      />
      <div className="grid grid-cols-13">
        <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-2 flex items-center">
          <h1 className="md:text-3xl font-bold">{title}</h1>
        </div>
        <div className="col-start-1 col-end-6 mt-2 sm:mt-0 sm:col-start-2 sm:col-end-6 flex items-center">
          <div className="form-control">
            <div className="relative">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Buscar indexador"
                className="w-full pr-16 input input-ghost	border-blue-600	"
              />
              <button
                onClick={sendWordForSearch}
                className="absolute top-0 right-0 rounded-l-none btn btn-ghost bg-blue-600 hover:bg-blue-500"
              >
                <SearchIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-start-6 mt-2 ml-2 sm:ml-0 sm:mt-0 sm:col-start-6 text-right">
          <button
            onClick={() => changeStateOfModal(true)}
            className="btn btn-ghost bg-blue-600 hover:bg-blue-500"
          >
            <span className="text-white">Novo</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default SubPanel;
