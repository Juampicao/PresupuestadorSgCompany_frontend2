import React, { useEffect } from "react";
import Header from "../../atoms/Header";
import usePedidos from "../../hooks/usePedidos";
import FormularioPedido from "./FormularioPedido";

const NuevoPedido = () => {
  const {
    getAllPedidosFn,
    loading,
    deletePedidoFn,
    createNewPedidoFn,
    editPedidoFn,
  } = usePedidos();

  useEffect(() => {
    getAllPedidosFn();
  }, []);

  return (
    <>
      <Header title={"Agregar Pedido"} />
      <FormularioPedido
        pedido={""}
        deleteFn={deletePedidoFn}
        loading={loading}
        createFn={createNewPedidoFn}
        editFn={editPedidoFn}
      />
    </>
  );
};

export default NuevoPedido;
