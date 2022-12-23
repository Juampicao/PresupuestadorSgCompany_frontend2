import React, { useEffect, useState } from "react";
import CustomLogger from "../../helpers/CustomLogger";
import usePedidos from "../../hooks/usePedidos";

let customLogger = new CustomLogger();

const FormularioCambioEstado = ({ pedido }) => {
  const { editPedidoFn } = usePedidos();
  const [nuevoEstado, setNuevoEstado] = useState("");
  const [pedidoEditado, setPedidoEditado] = useState({});

  async function handleEdit(pedido) {
    await setPedidoEditado(pedido);
    await editPedidoFn(pedidoEditado);
  }

  const { estado, nombreCliente } = pedido;

  useEffect(() => {
    customLogger.logDebug("[FormularioCambioEstado]: pedido:", pedido);
  }, []);

  return (
    <>
      <div className="form_container">
        <h1 className="text-xl"> DESHABILITADO POR EL MOMENTO </h1>
        <h1> Cambiar estado pedido de {nombreCliente} </h1>
        <p>Estado viejo: {estado}</p>
        <form action="" className="fo">
          <div className="form_container_child">
            <select
              name=""
              id=""
              onChange={(e) => setNuevoEstado(e.target.value)}
            >
              <option value="">-- select --</option>
              <option value="success">Terminado</option>
              <option value="empty">En proceso</option>
            </select>
          </div>
          <button
            className=" mx-auto rounded-lg bg-blue-500 text-white px-5 py-2.5"
            type="button"
            onClick={() => handleEdit(pedido)}
          >
            Guardar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormularioCambioEstado;
