import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spiner from "../../atoms/spiner/Spiner";
import CustomLogger from "../../helpers/CustomLogger";
import useDataBase from "../../hooks/useDataBase";
let customLogger = new CustomLogger();

const FormularioPedido = ({ pedido, loading, editFn, createFn }) => {
  const { clientes, getAllClientesFn } = useDataBase();

  const [descripcionPedido, setDescripcionPedido] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [id, setId] = useState(null);

  const navigate = useNavigate();

  //* Objeto Nuevo Pedido
  let objetoNuevoPedido = {
    descripcionPedido,
    nombreCliente,
    fecha,
    id,
  };

  //* Completar los campos de input.
  async function completeFields(pedido) {
    if (pedido) {
      setDescripcionPedido(pedido.descripcionPedido);
      setFecha(pedido.fecha);
      setNombreCliente(pedido.nombreCliente);
      setId(pedido.id);
    }
  }

  const handleSubmit = async () => {
    customLogger.logDebug(
      "[FormularioPedido.jsx]=> handleSubmit() =>  objetoNuevoPedido:",
      objetoNuevoPedido
    );

    if (pedido?.id) {
      customLogger.logDebug("editando");
      await editFn(objetoNuevoPedido);
    } else {
      customLogger.logDebug("creando");
      await createFn(objetoNuevoPedido);
    }
    navigate(`/pedidos/listado`);
  };

  useEffect(() => {
    completeFields(pedido);
    getAllClientesFn();
  }, []);

  return (
    <>
      <div className="form_container">
        <form action="">
          <h3 className="titulos">
            {pedido?.id ? "Editar Pedido" : "Crear Pedido"}
          </h3>
          {/* Cliente */}
          <div className="form_container_child">
            <label htmlFor=""> Cliente</label>
            {/* <DataListReutilizable
              dataList={clientes}
              fieldShow={"nombreCliente"}
              fieldValue={"id"}
            /> */}
            {/* <input
              type="text"
              placeholder="Nombre cliente.."
              name="nombreCliente"
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
            /> */}
            <input
              type="text"
              list="dataListData"
              id="country"
              name="clientes"
              size="50"
              autocomplete="off"
              onChange={(e) => setNombreCliente(e.target.value)}
            />
            <datalist id="dataListData">
              {clientes.length > 0 ? (
                clientes.map((cliente) => (
                  <option key={cliente.id} value={cliente.id}>
                    {cliente.nombreCliente}
                  </option>
                ))
              ) : (
                <p className="my-5 text-center">
                  No hay ningun dato para mostrar
                </p>
              )}
            </datalist>
          </div>

          {/* Descripcion */}
          <div className="form_container_child">
            <label htmlFor=""> Descripcion del pedido</label>
            <textarea
              type="textarea"
              placeholder="Pedido del cliente.."
              className="mt-2 block w-full p-3 bg-gray-50 h-40"
              name="nombrePedido"
              value={descripcionPedido}
              onChange={(e) => setDescripcionPedido(e.target.value)}
            ></textarea>
          </div>
        </form>
        <button className="botonSubmit mx-auto" onClick={handleSubmit}>
          {pedido?.id ? "Guardar Pedido" : "Crear Pedido"}
          {loading ? (
            <span className="pl-3">
              <Spiner />
            </span>
          ) : (
            ""
          )}
        </button>
      </div>
    </>
  );
};

export default FormularioPedido;
