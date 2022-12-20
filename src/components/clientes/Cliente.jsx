import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BotonEditar, BotonEliminar, BotonVer } from "../../atoms/Botones";
import Modal from "../../atoms/Modal";
import CustomLogger from "../../helpers/CustomLogger";
import useDataBase from "../../hooks/useDataBase";
import useModal from "../../hooks/useModal.js";
import FormularioCliente from "./formulario/FormularioCliente";

let customLogger = new CustomLogger();

const Cliente = ({ cliente }) => {
  const { deleteClientFn } = useDataBase();

  const [isOpenEditForm, openEditForm, closeEditForm] = useModal(false);

  const navigate = useNavigate();

  const {
    id,
    nombreCliente,
    contactoCliente,
    direccionCliente,
    fechaUltimaModificacion,
  } = cliente;

  function handleDelete(id) {
    customLogger.logDebug("[Cliente.jsx] = handleDelete() => id:" + id);
    let confirmar = confirm(
      `¿Seguro deseas eliminar a\n${cliente.nombreCliente}?`
    );
    if (confirmar) {
      deleteClientFn(id);
    }
  }

  useEffect(() => {
    customLogger.logDebug("el cliente es:" + JSON.stringify(cliente, null, 2));
  }, []);

  return (
    <>
      <tr className="hover:bg-gray-200 border ">
        <td>{id}</td>
        <td>{nombreCliente}</td>
        <td>{contactoCliente}</td>
        <td>{direccionCliente}</td>
        <td>{fechaUltimaModificacion.split("T")[0]}</td>

        <td className=" ">
          <div className=" ">
            <BotonVer
              value="Ver"
              onClick={() => navigate(`/clientes/ver/${id}`)}
            />

            <BotonEditar value="Editar" onClick={() => openEditForm()} />
            <BotonEliminar value="Eliminar" onClick={() => handleDelete(id)} />
          </div>
        </td>
      </tr>

      <Modal isOpen={isOpenEditForm} closeModal={closeEditForm}>
        <FormularioCliente cliente={cliente} />
      </Modal>
    </>
  );
};

export default Cliente;
