interface ModalAlertProp {
  closeAndCancelAlert: (state: boolean) => void;
  confirmAlert: (state: boolean) => void;
}

function ModalAlert({ closeAndCancelAlert, confirmAlert }: ModalAlertProp) {
  return (
    <>
      <div className="alert alert-error mb-2">
        <div className="flex-1">
          <label className="mx-3">Tem certeza que deseja excluir?</label>
        </div>
        <div className="flex-none">
          <button
            onClick={() => closeAndCancelAlert(false)}
            className="btn btn-sm mr-2 btn-ghost"
          >
            Cancelar
          </button>
          <button
            onClick={() => confirmAlert(false)}
            className="btn btn-sm mr-2 btn-ghost bg-red-600 hover:bg-red-500 text-white"
          >
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalAlert;
