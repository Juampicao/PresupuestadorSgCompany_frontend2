import axios from "axios";
import { saveAs } from "file-saver";
import React, { createContext, useEffect, useState } from "react";
import CustomLogger from "../helpers/CustomLogger";

const customLogger = new CustomLogger();

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const [isCargando, setIsCargando] = useState(false);
  const [error, setError] = useState(false);
  const [presupuestoFinal, setPresupuestoFinal] = useState({});

  const [cliente, setCliente] = useState({
    nombreCliente: "",
    contactoCliente: "",
    direccionCliente: "",
    nombrePedido: "",
    descripcionPedido: "",
  });

  const [empresa, setEmpresa] = useState({
    nombreEmpresa: "",
    direccionEmpresa: "",
    contactoEmpresa: "",
    observacionesParticulares: "",
    aclaracionesGenerales: "",
  });
  const [variables, setVariables] = useState({
    numeroPresupuesto: "",
    fechaPresupuesto: "",
    validezPresupuesto: "",
  });
  const [productosList, setProductosList] = useState([
    {
      cantidad: "",
      costoUnitario: "",
      descripcion: "",
      nombreMaterial: "",
      coeficienteVenta: "",
    },
  ]);

  //* Desaparecer error a los 5 segundos.
  if (error) {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }

  /**
   * Validar form vacio.
   * @param  variable
   * @returns error if vacio.
   */
  function validarForm(variable) {
    if ([variable].includes("")) {
      setError(true);
      return;
    }
  }

  //* Completar el presupuesto final con los 4 estados principales.
  useEffect(() => {
    setPresupuestoFinal({
      cliente,
      empresa,
      productosList,
      variables,
    });
  }, [cliente, empresa, productosList, variables]);

  /**
   * Crear un nuevo Pedido.
   * @param {object} pedido
   */
  async function createNewPedidoFn(pedido) {
    customLogger.logDebug("[createNewPedidoFn]:", pedido);
    axios
      .post(`http://localhost:4000/pedidos`, pedido)
      .then((result) => customLogger.logInfo(`Creado con exito:`, result))
      .catch((error) => customLogger.logError("Hubo un error:", error));
  }

  /**
   * Definir un nombre personalizado del pdf.
   * @returns string.pdf
   */
  function nombrePdfPersonalizado() {
    return `${variables.numeroPresupuesto}-${cliente.nombrePedido}.pdf`;
  }

  //*Conexión con backend para imprimir el pdf
  async function handleCreateAndDownloadPdf() {
    createNewPedidoFn(presupuestoFinal);
    setTimeout(() => {
      console.log(
        "generalProvider, createAndDownloadPdf => El presupuesto final=",
        presupuestoFinal
      );
      axios
        .post(`${import.meta.env.VITE_API_URL}/create-pdf`, presupuestoFinal)
        .then(() =>
          axios.get(`${import.meta.env.VITE_API_URL}/fetch-pdf`, {
            responseType: "blob",
          })
        )
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: "application/pdf" });
          saveAs(pdfBlob, nombrePdfPersonalizado());
          setIsCargando(false);
        });
    }, 2000);
  }

  /**
   * Ver puerto frontend
   */
  // console.log(`Frontend corriento en ${import.meta.env.VITE_API_URL}`);

  return (
    <GeneralContext.Provider
      value={{
        setCliente,
        cliente,
        empresa,
        setEmpresa,
        productosList,
        setProductosList,
        setVariables,
        handleCreateAndDownloadPdf,
        isCargando,
        setIsCargando,
        error,
        setError,
        validarForm,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export { GeneralProvider };

export default GeneralContext;
