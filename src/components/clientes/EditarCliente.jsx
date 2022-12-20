import React, { useEffect } from "react";
import Header from "../../atoms/Header";
import useDataBase from "../../hooks/useDataBase";
import FormularioCliente from "./formulario/FormularioCliente";

const EditarCliente = () => {
  const { handleSubmitNewClient, getClientById, cliente } = useDataBase();

  useEffect(() => {
    getClientById(101);
  }, []);

  return (
    <div>
      <Header title={"Editar Cliente "} />

      <FormularioCliente cliente={cliente} />
    </div>
  );
};

export default EditarCliente;
