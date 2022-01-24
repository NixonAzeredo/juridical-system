import { useForm } from "react-hook-form";

interface ModalProp {
  isOpen: boolean;
  changeState: (state: boolean) => void;
  sendFormToUpdate: (data: { name: string; symbol: string }) => void;
}

function Modal({ isOpen = false, changeState, sendFormToUpdate }: ModalProp) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    sendFormToUpdate(data);
    reset({
      name: "",
      symbol: "",
    });
  };

  const cancelUpdate = () => {
    changeState(false);
  };

  return (
    <>
      <input
        type="checkbox"
        readOnly
        checked={isOpen}
        id="indexer-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <form onSubmit={handleSubmit(onSubmit)} className="modal-box">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Símbolo</span>
            </label>
            <input
              type="text"
              placeholder="Digite o símbolo do indexador"
              className="input input-bordered"
              {...register("symbol", {
                required: "Campo obrigatório",
                minLength: {
                  value: 3,
                  message: "O campo deve ter no mínimo 3 caracteres",
                },
              })}
            />
            {errors.symbol && (
              <div className="alert alert-error mt-2">
                <div className="flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mx-2 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    ></path>
                  </svg>
                  <label>{errors.symbol.message}</label>
                </div>
              </div>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nome</span>
            </label>
            <input
              type="text"
              placeholder="Digite o nome do indexador"
              className="input input-bordered"
              {...register("name", {
                required: "Campo obrigatório",
                minLength: {
                  value: 3,
                  message: "O campo deve ter no mínimo 3 caracteres",
                },
              })}
            />
            {errors.name && (
              <div className="alert alert-error mt-2">
                <div className="flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mx-2 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    ></path>
                  </svg>
                  <label>{errors.name.message}</label>
                </div>
              </div>
            )}
          </div>

          <div className="modal-action">
            <button onClick={cancelUpdate} className="btn btn-ghost">
              Fechar
            </button>
            <button
              type="submit"
              className="btn btn-ghost bg-blue-600 hover:bg-blue-500 text-white"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Modal;
