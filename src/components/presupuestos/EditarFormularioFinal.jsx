import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../atoms/Header";
import Spiner from "../../atoms/spiner/Spiner";
import CustomLogger from "../../helpers/CustomLogger";
import usePedidos from "../../hooks/usePedidos";
import FormularioFinal from "./FormularioFinal";

const customLogger = new CustomLogger();
// const FormularioFinalEditar = ({ pedido }) => {
// const { getPedidoByIdFn, pedido } = usePedidos();

const EditarFormularioFinal = ({}) => {
  const { getPedidoByIdFn, pedido, loading } = usePedidos();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPedidoByIdFn(params.id);

    customLogger.logDebug("params.id:", params.id);
    customLogger.logDebug("[FomrularioFinalEditar.jsx], pedido:", pedido);
  }, []);

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
