import React, { useEffect } from "react";
import Header from "../../atoms/Header";
import Spiner from "../../atoms/spiner/Spiner";
import usePedidos from "../../hooks/usePedidos";
import Pedido from "./Pedido";

const ListadoPedidos = () => {
  const {
    pedidos,
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
      <div>
        <Header title={"Listado Pedidos "} />

        {/* {JSON.stringify(clientes, null, 2)} Debug error */}
        {loading ? <Spiner /> : ""}
        <div className="overflow-auto rounded-xl  shadow-xl  my-5 text-center max-w-7xl  ">
          <table className="w-full">
            <thead className=" bg-white border-b-2 border-gray-200">
              <tr className="  bg-white">
                <th className="p-2"> Id</th>
                <th className="p-2 ">Pedido</th>
                <th className="p-2 ">Cliente</th>
                <th className="p-2 ">Fecha</th>

                <th className="p-2 ">Funciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {pedidos.length > 0 ? (
                pedidos.map((pedido) => (
                  <Pedido
                    key={pedido.id}
                    pedido={pedido}
                    deleteFn={deletePedidoFn}
                    loading={loading}
                    createFn={createNewPedidoFn}
                    editFn={editPedidoFn}
                  />
                ))
              ) : (
                <p className="my-5 text-center">
                  No hay ningun pedido para mostrar
                </p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListadoPedidos;
