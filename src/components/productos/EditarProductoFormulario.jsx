import React, { useEffect } from "react";
import Header from "../../atoms/Header";
import CustomLogger from "../../helpers/CustomLogger";
import ProductoFormulario from "../formularios/ProductoFormulario";

const customLogger = new CustomLogger();
const EditarProductoFormulario = ({ arrayPoductsList }) => {
  useEffect(() => {
    customLogger.logDebug(
      `[EditarProductoFormulario.jsx], cantidad: ${arrayPoductsList.length}, arrayPoductsList: ${arrayPoductsList} `,
      arrayPoductsList
    );
    validateObjectEmpty(arrayPoductsList);
  }, []);

  /**
   * Si el array por props esta vacio lanzará un error. El componente EDITA.
   * @param {*} array
   */
  function validateObjectEmpty(array) {
    if (!array) {
      customLogger.logError(
        "[EditarProductoFormulario.jsx], estas editando pero arrayPoductsList esta vacio."
      );
    }
  }
  return (
    <>
      <Header title={"Editar Lista Producto "} />

      <ProductoFormulario arrayPoductsList={arrayPoductsList} />
    </>
  );
};

export default EditarProductoFormulario;
