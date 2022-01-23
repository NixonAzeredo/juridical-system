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
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="md:text-3xl font-bold">{title}</h1>
          <div className="form-control ml-5">
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
        <div>
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
