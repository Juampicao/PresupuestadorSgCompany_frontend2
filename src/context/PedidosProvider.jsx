import axios from "axios";
import React, { createContext, useState } from "react";
import CustomLogger from "../helpers/CustomLogger";
const PedidosContext = createContext();

let customLogger = new CustomLogger();

const PedidosProvider = ({ children }) => {
  const url = `http://localhost:4000/pedidos`;
  // `${import.meta.env.DATABASE__URL}

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
      .catch((error) => customLogger.logError("Hubo un error:", error));
  }

  // Editar Pedido
  async function editPedidoFn(pedido) {
    customLogger.logInfo("[editClientFn]:", pedido);
    axios
      .put(`${url}/${pedido.id}`, pedido)
      .then((result) => customLogger.logDebug("Creado con éxito:", result))
      .catch((error) => customLogger.logError("Hubo un error:", error));
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
          JSON.stringify(res.data, null, 4)
        );
        setPedidos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        customLogger.logError("Hubo un error", err);
        setLoading(false);
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
        customLogger.logDebug(
          "[getPedidoByIdFn()]:" + JSON.stringify(res.data, null, 4)
        );
        setPedido(res.data);
        setLoading(false);
      })
      .catch((err) => {
        customLogger.logError(err);
        setLoading(false);
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
      .catch((err) => {
        customLogger.logError("Hubo un error", err);
        setLoading(false);
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
