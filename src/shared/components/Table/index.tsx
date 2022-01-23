import { useState } from "react";
import Dropdown from "../Dropdown";
import LoadingData from "../LoadingData";
import Modal from "../Modal";
import ModalAlert from "../ModalAlert";
import "./index.css";

interface TableProps<T> {
  dataTable: T[];
  deleteIndexer: (id: number) => void;
  updateIndexer: (data: { name: string; symbol: string; id: number }) => void;
}

function Table<T>({
  dataTable,
  deleteIndexer,
  updateIndexer,
}: TableProps<T | any>) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalAlert, setIsOpenModalAlert] = useState(false);
  const [idIndexer, setIdIndexer] = useState<number>(0);

  const changeStateOfModal = (state: boolean, id = 0) => {
    setIsOpenModal(state);
    setIdIndexer(id);
  };

  const changeStateOfModalAlert = (state: boolean, id = 0) => {
    setIsOpenModalAlert(state);
    setIdIndexer(id);
  };

  const confirmDeleteIndexer = (state: boolean, id: number) => {
    if (id) deleteIndexer(id);
    changeStateOfModalAlert(state);
  };

  const sendUpdateIndexer = (data: { name: string; symbol: string }) => {
    console.log(data);
    changeStateOfModal(false);
    updateIndexer({ ...data, id: idIndexer });
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        changeState={closeModal}
        sendFormToUpdate={sendUpdateIndexer}
      />
      {isOpenModalAlert && (
        <ModalAlert
          closeAndCancelAlert={changeStateOfModalAlert}
          confirmAlert={(state) => confirmDeleteIndexer(state, idIndexer)}
        />
      )}
      <div className="overflow-x-auto min-h-80">
        {dataTable.length > 0 && (
          <table className="table w-full">
            <thead>
              <tr>
                <th>Símbolo</th>
                <th>Nome</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((indexer, index) => (
                <tr key={indexer.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div>{indexer.simbolo}</div>
                      </div>
                    </div>
                  </td>
                  <td>{indexer.nome}</td>
                  <td></td>
                  <td className="float-right">
                    <Dropdown
                      openModalAlert={(state) =>
                        changeStateOfModalAlert(state, indexer.id)
                      }
                      openModalForEdit={(state) =>
                        changeStateOfModal(state, indexer.id)
                      }
                      positionIndex={index}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {!dataTable.length && <LoadingData />}
      </div>
    </>
  );
}

export default Table;
