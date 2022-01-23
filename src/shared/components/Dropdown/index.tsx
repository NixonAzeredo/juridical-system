import {
  DotsVerticalIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/solid";

interface DropdownProp {
  positionIndex: number;
  openModalForEdit: (state: boolean) => void;
  openModalAlert: (state: boolean) => void;
}

function Dropdown({
  positionIndex,
  openModalForEdit,
  openModalAlert,
}: DropdownProp) {
  return (
    <div
      className={`dropdown  dropdown-hover dropdown-left ${
        positionIndex >= 5 ? "dropdown-end" : "dropdown-start"
      }`}
    >
      <button tabIndex={0} className="btn btn-ghost btn-xs">
        <DotsVerticalIcon className="h-5 w-5" />
      </button>
      <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <button
            onClick={() => openModalForEdit(true)}
            className="btn btn-ghost hover:text-white hover:bg-blue-500 relative"
          >
            <PencilIcon className="h-5 w-5 float-left absolute left-4" />
            Editar
          </button>
        </li>
        <li>
          <button
            onClick={() => openModalAlert(true)}
            className="btn btn-ghost w-100 hover:text-white hover:bg-blue-500 relative"
          >
            <TrashIcon className="h-5 w-5 float-left absolute left-4" />
            Deletar
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
