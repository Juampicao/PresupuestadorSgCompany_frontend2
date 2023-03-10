import axios from "axios";
import React, { createContext, useState } from "react";
import ErrorPedidos from "../errores/ErrorPedidos";
import CustomLogger from "../helpers/CustomLogger";

const PedidosContext = createContext();

let customLogger = new CustomLogger();

const PedidosProvider = ({ children }) => {
  // const {data : pedidos, isLoading, error} = useAxios();
  const url = `${import.meta.env.VITE_DATABASE_URL}/pedidos`;
  // const url = `${import.meta.env.VITE_DATABASE_URL}/presupuestos`;

  const [loading, setLoading] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [pedido, setPedido] = useState({});

  // -----------------------  Pedidos -----------------------//

  /**
   * Crear un nuevo Pedido.
   * @param {object} pedido
   */
  async function createNewPedidoFn(pedido) {
    customLogger.logDebug("[createNewPedidoFn]:", pedido);
    axios
      .post(`${url}`, pedido)
      .then((result) => customLogger.logInfo(`Creado con exito:`, result))
      .catch((error) => {
        customLogger.logError("[createNewPedidoFn]", error);
        throw new ErrorPedidos("[createNewPedidoFn]", error);
      });
  }

  // Editar Pedido
  async function editPedidoFn(pedido) {
    customLogger.logInfo("[editClientFn]:", pedido);
    axios
      .put(`${url}/${pedido.id}`, pedido)
      .then((result) => customLogger.logDebug("Creado con éxito:", result))
      .then(() => window.location.reload())
      .catch((error) => {
        customLogger.logError("[editClientFn]", error);
        throw new ErrorPedidos("[editClientFn]", error);
      });
  }

  /**
   * Obtener todos los pedidos.
   */
  function getAllPedidosFn() {
    customLogger.logInfo("[getAllPedidosFn]");

    setLoading(true);
    axios
      .get(`${url}`)
      .then((res) => {
        customLogger.logDebug(
          "[getAllPedidosFn()], Los pedidos son:",
          res.data
        );
        setPedidos(res.data);
        setLoading(false);
      })
      .catch((error) => {
        customLogger.logError("[getAllPedidosFn]", error);
        setLoading(false);
        throw new ErrorPedidos("[getAllPedidosFn]", error);
      });
  }

  /**
   * Obtener getAllPedidosFn unico por id.
   * @param {string} id
   */
  async function getPedidoByIdFn(id) {
    setLoading(true);
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        customLogger.logDebug("[getPedidoByIdFn]:" + res.data.data);
        setPedido(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        customLogger.logError("[getPedidoByIdFn]", error);
        setLoading(false);
        throw new ErrorPedidos("[getPedidoByIdFn]", error);
      });
  }

  /**
   * Eliminar Pedido por id
   * @param {string} id
   */
  async function deletePedidoFn(id) {
    setLoading(true);
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        customLogger.logDebug(
          `[deletePedidoFn()] = Pedido borrado con exito:${id}, respuesta: ${res}`
        );
        setLoading(false);
      })
      .then(() => window.location.reload())
      .catch((error) => {
        customLogger.logError("[deletePedidoFn]", error);
        setLoading(false);
        throw new ErrorPedidos("[deletePedidoFn]", error);
      });
  }

  return (
    <PedidosContext.Provider
      value={{
        // States Locales
        loading,
        setLoading,
        pedido,
        setPedido,
        pedidos,
        setPedidos,
        //Funciones
        createNewPedidoFn,
        editPedidoFn,
        getAllPedidosFn,
        getPedidoByIdFn,
        deletePedidoFn,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};

export { PedidosProvider };

export default PedidosContext;
