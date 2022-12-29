import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainerChild from "../../atoms/FormContainerChild";
import Spiner from "../../atoms/spiner/Spiner";
import CustomLogger from "../../helpers/CustomLogger";
import {
  estadoPedidosArray,
  estadoPedidosObject,
} from "../../helpers/estadoPedidos.js";
import useClientes from "../../hooks/useClientes";

// Image
import { ICONS } from "../../helpers/images";

let customLogger = new CustomLogger();

const FormularioPedido = ({ pedido, loading, editFn, createFn }) => {
  const { clientes, getAllClientesFn } = useClientes();

  const [descripcionPedido, setDescripcionPedido] = useState("");
  const [nombrePedido, setNombrePedido] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [estado, setEstado] = useState(estadoPedidosObject.default.value);
  const [numeroCotizacion, setNumeroCotizacion] = useState("");
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  //* Objeto Nuevo Pedido
  let objetoNuevoPedido = {
    descripcionPedido,
    nombrePedido,
    nombreCliente,
    fecha,
    estado,
    numeroCotizacion,
    id,
  };

  //* Completar los campos de input.
  async function completeFields(pedido) {
    if (pedido) {
      setDescripcionPedido(pedido.descripcionPedido);
      setNombrePedido(pedido.nombrePedido);
      setNombreCliente(pedido.nombreCliente);
      setFecha(pedido.fecha);
      setEstado(pedido.estado);
      setNumeroCotizacion(pedido.numeroCotizacion);
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
            <FormContainerChild img={ICONS.clienteImage} title="Cliente" />

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
              id="clientes"
              name="clientes"
              size="50"
              autoComplete="off"
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
            />
            <datalist id="dataListData">
              {clientes.length > 0 ? (
                clientes.map((cliente) => (
                  <option key={cliente.id} value={cliente.nombreCliente}>
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

          {/* Nombre Pedido */}
          <div className="form_container_child">
            <FormContainerChild
              img={ICONS.pedidosImage}
              title="Nombre del pedido"
            />
            <input
              type="text"
              id="nombrePedido"
              placeholder="Nombre pedido.."
              name="nombrePedido"
              autoComplete="off"
              value={nombrePedido}
              onChange={(e) => setNombrePedido(e.target.value)}
            />
          </div>

          <div className="form_container_child">
            <FormContainerChild
              img={ICONS.clienteImage}
              title="Numero Cotizacion del pedido"
            />
            <input
              type="text"
              placeholder="Numero cotizacion pedido.."
              name="numeroCotizacion"
              autoComplete="off"
              value={numeroCotizacion}
              onChange={(e) => setNumeroCotizacion(e.target.value)}
            />
          </div>

          {/* Descripcion */}
          <div className="form_container_child">
            <FormContainerChild
              img={ICONS.notasImage}
              title="Descripcion del pedido"
            />
            <textarea
              type="textarea"
              placeholder="Pedido del cliente.."
              className="mt-2 block w-full p-3 bg-gray-50 h-40"
              name="nombrePedido"
              value={descripcionPedido}
              onChange={(e) => setDescripcionPedido(e.target.value)}
            ></textarea>
          </div>
          <div className="form_container_child">
            <label htmlFor="">Estado pedido</label>
            <select
              name=""
              id=""
              className="inputSelect  rounded-md border-4"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              {estadoPedidosArray.map((estado) => (
                <option>{estado.nombre}</option>
              ))}
            </select>
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
