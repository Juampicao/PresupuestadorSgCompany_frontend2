import React from "react";
import ContenedorFormularios from "../ContendorFormularios";
import EmpresaFormulario from "../formularios/EmpresaFormulario";
import ProductoFormulario from "../formularios/ProductoFormulario";

import Spiner from "../../atoms/spiner/Spiner";
import CustomLogger from "../../helpers/CustomLogger";
import useGeneral from "../../hooks/useGeneral";
import ClienteFormulario from "../formularios/ClienteFormulario";
import VariablesFormulario from "../formularios/VariablesFormulario";
const customLogger = new CustomLogger();

const FormularioFinal = ({ pedido = "" }) => {
  const { handleCreateAndDownloadPdf, isCargando, setIsCargando } =
    useGeneral();

  const { variables, cliente, empresa, productosList } = pedido;

  //* HandleSubmit
  const handleSubmit = async () => {
    setIsCargando(true);
    handleCreateAndDownloadPdf();
  };

  return (
    <div>
      <ContenedorFormularios>
        <form className=" p-5  max-w-3xl mx-auto ">
          <h2 className="tituloPrincipal"> Presupuestos</h2>

          <VariablesFormulario objetoVariables={variables} />
          <ClienteFormulario objetoCliente={cliente} />
          <ProductoFormulario arrayProductList={productosList} />
          <EmpresaFormulario objetoEmpresa={empresa} />
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
