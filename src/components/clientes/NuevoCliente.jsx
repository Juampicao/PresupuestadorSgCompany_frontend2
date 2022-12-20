import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../atoms/Header";
import CustomLogger from "../../helpers/CustomLogger";
import FormularioCliente from "./formulario/FormularioCliente";

let customLogger = new CustomLogger();

const NuevoCliente = () => {
  const location = useLocation().pathname;

  customLogger.logDebug("location:" + location);

  return (
    <div>
      <Header title={"Agregar Cliente"} />
      <FormularioCliente cliente={""} />
    </div>
  );
};

export default NuevoCliente;
