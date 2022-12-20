import React from "react";
import ContenedorFormularios from "./ContendorFormularios";
import ClienteFormulario from "./formularios/ClienteFormulario";
import EmpresaFormulario from "./formularios/EmpresaFormulario";
import ProductoFormulario from "./formularios/ProductoFormulario";

import Spiner from "../atoms/spiner/Spiner";
import useGeneral from "../hooks/useGeneral";
import VariablesFormulario from "./formularios/VariablesFormulario";
const FormularioFinal = () => {
  const { handleCreateAndDownloadPdf, isCargando, setIsCargando } =
    useGeneral();

  const handleSubmit = async () => {
    setIsCargando(true);
    handleCreateAndDownloadPdf();
  };

  return (
    <div>
      <ContenedorFormularios>
        <form className=" p-5  max-w-3xl mx-auto ">
          <h2 className="tituloPrincipal"> Presupuestos</h2>
          <VariablesFormulario />
          <ClienteFormulario />
          <ProductoFormulario />
          <EmpresaFormulario />
        </form>
        <div className="flex">
          <button className="botonSubmit mx-auto" onClick={handleSubmit}>
            Crear PDF
            {isCargando ? (
              <span className="pl-3">
                <Spiner />
              </span>
            ) : (
              ""
            )}
          </button>
        </div>
      </ContenedorFormularios>
    </div>
  );
};

export default FormularioFinal;
