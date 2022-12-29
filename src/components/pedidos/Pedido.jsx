import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BotonEditar, BotonEliminar, BotonVer } from "../../atoms/Botones";
import Modal from "../../atoms/Modal";
import CustomLogger from "../../helpers/CustomLogger";
import useModal from "../../hooks/useModal";
import FormularioPedido from "./FormularioPedido";

let customLogger = new CustomLogger();

const Pedido = ({ pedido, deleteFn, loading, createFn, editFn }) => {
  const {
    id,
    descripcionPedido,
    nombreCliente,
    fecha,
    estado,
    nombrePedido,
    numeroCotizacion,
  } = pedido;

  const [isOpenEditForm, openEditForm, closeEditForm] = useModal(false);

  const navigate = useNavigate();

  // HandleDelete
  function handleDelete(id) {
    customLogger.logDebug("[Pedido.jsx] = handleDelete() => id:" + id);
    let confirmar = confirm(
      `¿Seguro deseas eliminar a\n${pedido.nombrePedido}?`
    );
    if (confirmar) {
      deleteFn(id);
    }
  }
  useEffect(() => {
    // customLogger.logDebug("el pedido es:" + JSON.stringify(pedido, null, 2));
  }, []);

  return (
    <>
      <tr
      // className={`${estadoPedidosObject[estado].color} border border-1 border-slate-400`}
      >
        <td className="">
          <img
            // src={estadoPedidosObject[estado].img}
            alt=""
            className="img-icon mx-auto"
          />
        </td>
        <td>{id}</td>
        <td>
          {nombrePedido
            ? nombrePedido
            : pedido.variables.numeroPresupuesto + " " + nombrePedido}
        </td>
        <td className="text-center"> {numeroCotizacion}</td>
        <td>{nombreCliente}</td>
        <td>{fecha ? fecha.split("T")[0] : fecha}</td>

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
