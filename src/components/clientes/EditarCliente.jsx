import React, { useEffect } from "react";
import Header from "../../atoms/Header";
import useClientes from "../../hooks/useClientes";
import FormularioCliente from "./formulario/FormularioCliente";

const EditarCliente = () => {
  const { handleSubmitNewClient, getClientById, cliente } = useClientes();

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
