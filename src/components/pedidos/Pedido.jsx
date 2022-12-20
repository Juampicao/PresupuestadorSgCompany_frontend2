import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BotonEditar, BotonEliminar, BotonVer } from "../../atoms/Botones";
import Modal from "../../atoms/Modal";
import CustomLogger from "../../helpers/CustomLogger";
import useModal from "../../hooks/useModal";
import FormularioPedido from "./FormularioPedido";

let customLogger = new CustomLogger();

const Pedido = ({ pedido, deleteFn, loading, createFn, editFn }) => {
  const { id, descripcionPedido, nombreCliente, fecha } = pedido;

  const [isOpenEditForm, openEditForm, closeEditForm] = useModal(false);

  const navigate = useNavigate();

  // HandleDelete
  function handleDelete(id) {
    customLogger.logDebug("[Pedido.jsx] = handleDelete() => id:" + id);
    let confirmar = confirm(
      `¿Seguro deseas eliminar a\n${pedido.descripcionPedido}?`
    );
    if (confirmar) {
      deleteFn(id);
    }
  }
  useEffect(() => {
    customLogger.logDebug("el pedido es:" + JSON.stringify(pedido, null, 2));
  }, []);

  return (
    <>
      <tr className="hover:bg-gray-200 border">
        <td>{id}</td>
        <td>{descripcionPedido}</td>
        <td>{nombreCliente}</td>
        <td>{fecha.split("T")[0]}</td>

        <td className=" ">
          <div className=" ">
            <BotonVer
              value="Ver"
              onClick={() => navigate(`/pedidos/ver/${id}`)}
            />
            <BotonEditar value="Editar" onClick={() => openEditForm()} />

            <BotonEliminar value="Eliminar" onClick={() => handleDelete(id)} />
          </div>
        </td>
      </tr>

      <Modal isOpen={isOpenEditForm} closeModal={closeEditForm}>
        <FormularioPedido
          pedido={pedido}
          loading={loading}
          createFn={createFn}
          editFn={editFn}
        />
      </Modal>
    </>
  );
};

export default Pedido;
