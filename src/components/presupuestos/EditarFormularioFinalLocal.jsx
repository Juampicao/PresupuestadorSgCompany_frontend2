import React from "react";
import Header from "../../atoms/Header";
import Spiner from "../../atoms/spiner/Spiner";
import CustomLogger from "../../helpers/CustomLogger";
import usePedidos from "../../hooks/usePedidos";
import FormularioFinal from "./FormularioFinal";

const customLogger = new CustomLogger();
// const FormularioFinalEditar = ({ pedido }) => {
// const { getPedidoByIdFn, pedido } = usePedidos();

const EditarFormularioFinal = ({ pedido }) => {
  const { loading } = usePedidos();

  return (
    <>
      <Header title={"Editar Presupuesto Viejo"} />
      {loading ? (
        <Spiner />
      ) : (
        <>
          <h1>{pedido.id ? `ID:${pedido.id}` : "no hay nada"}</h1>

          <FormularioFinal pedido={pedido} />
        </>
      )}
    </>
  );
};

export default EditarFormularioFinal;
