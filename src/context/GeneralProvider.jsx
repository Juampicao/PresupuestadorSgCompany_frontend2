import axios from "axios";
import { saveAs } from "file-saver";
import React, { createContext, useEffect, useState } from "react";

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const [isCargando, setIsCargando] = useState(false);
  const [error, setError] = useState(false);
  const [presupuestoFinal, setPresupuestoFinal] = useState({});

  const [cliente, setCliente] = useState({
    nombreCliente: "",
    contactoCliente: "",
    direccionCliente: "",
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
   * Definir un nombre personalizado del pdf.
   * @returns string.pdf
   */
  function nombrePdfPersonalizado() {
    return `Presupuesto${variables.numeroPresupuesto}-${cliente.nombreCliente}-${empresa.nombreEmpresa} .pdf`;
  }

  //*Conexión con backend para imprimir el pdf
  async function handleCreateAndDownloadPdf() {
    // const handleCreateAndDownloadPdf = async () => {
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
