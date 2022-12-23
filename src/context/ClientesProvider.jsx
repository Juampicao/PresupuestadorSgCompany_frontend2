import axios from "axios";
import React, { createContext, useState } from "react";
import CustomLogger from "../helpers/CustomLogger";
const ClientesContext = createContext();

let customLogger = new CustomLogger();

// DataBaseProviver por ClientesProvider
// DataBaseContext por ClientesContext

const ClientesProvider = ({ children }) => {
  const url = `http://localhost:4000/`;
  // `${import.meta.env.DATABASE__URL}

  const [loading, setLoading] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});
  const [empresas, setEmpresas] = useState([]);

  // Reiniciar Array luego de un update.
  // const reiniciarArray = async (array, stateToChange) => {
  //   const newArray = array.filter((e) => e.id !== id);
  //   stateToChange(newArray);
  // };

  // -----------------------  Clientes -----------------------//

  /**
   * Crear un nuevo Cliente.
   * @param {object} cliente
   */
  async function createNewClientFn(cliente) {
    customLogger.logDebug("[createNewClientFn]:", cliente);
    axios
      .post(`http://localhost:4000/clientes`, cliente)
      .then((result) => customLogger.logInfo(`Creado con exito:`, result))
      .catch((error) => customLogger.logError("Hubo un error:", error));
  }

  // Editar Cliente
  async function editClientFn(cliente) {
    customLogger.logInfo("[editClientFn]", cliente);

    axios
      .put(`http://localhost:4000/clientes/${cliente.id}`, cliente)
      .then((result) => customLogger.logDebug("Creado con éxito:", result))
      .then(() => window.location.reload())
      .catch((error) => customLogger.logError("Hubo un error:", error));
  }

  /**
   * Obtener todos los clientes
   */
  function getAllClientesFn() {
    customLogger.logInfo("[getAllClientesFn]");

    setLoading(true);
    axios
      .get(`http://localhost:4000/clientes`)
      .then((res) => {
        customLogger.logDebug(
          "[getAllClientes()], Los clientes son:",
          JSON.stringify(res.data, null, 4)
        );
        setClientes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        customLogger.logError("Hubo un error", err);
        setLoading(false);
      });
  }

  /**
   * Obtener cliente unico por id.
   * @param {string} id
   */
  async function getClientByIdFn(id) {
    setLoading(true);
    axios
      .get(`http://localhost:4000/clientes/${id}`)
      .then((res) => {
        customLogger.logDebug(
          "[getClientByIdFn():]" + JSON.stringify(res.data, null, 4)
        );
        setCliente(res.data);
        setLoading(false);
      })
      .catch((err) => {
        customLogger.logError(err);
        setLoading(false);
      });
  }

  /**
   * Eliminar Cliente por id
   * @param {string} id
   */
  async function deleteClientFn(id) {
    setLoading(true);
    axios
      .delete(`http://localhost:4000/clientes/${id}`)
      .then((res) => {
        customLogger.logDebug(
          `[deleteClientFn():]. Cliente borrado con exito:${id}`
        );
      })
      .then(() => window.location.reload())
      .then(() => setLoading(false))
      .catch((err) => {
        customLogger.logError("Hubo un error", err);
        setLoading(false);
      });
  }

  // -----------------------  COMPANIES -----------------------//

  // Get All Companies
  function getAllCompanies() {
    setLoading(true);
    axios
      .get(`http://localhost:4000/empresas`)
      .then((res) => {
        customLogger.logDebug("getAllCompanies:", res.data);
        setEmpresas(res.data);
        setLoading(false);
      })
      .catch((err) => {
        customLogger.logError(err);
        setLoading(false);
      });
  }

  return (
    <ClientesContext.Provider
      value={{
        loading,
        setLoading,
        empresas,
        setEmpresas,
        clientes,
        setClientes,
        cliente,
        setCliente,
        createNewClientFn,
        editClientFn,
        getAllCompanies,
        getAllClientesFn,
        getClientByIdFn,
        deleteClientFn,
      }}
    >
      {children}
    </ClientesContext.Provider>
  );
};

export { ClientesProvider };

export default ClientesContext;
