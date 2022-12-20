import React, { useEffect } from "react";
import Header from "../../atoms/Header";
import Spiner from "../../atoms/spiner/Spiner";
import CustomLogger from "../../helpers/CustomLogger";
import useDataBase from "../../hooks/useDataBase";
import Cliente from "./Cliente";

let customLogger = new CustomLogger();

const ListadoClientes = () => {
  const { getAllClientesFn, clientes, loading } = useDataBase();

  useEffect(() => {
    getAllClientesFn();
  }, []);

  return (
    <>
      <div>
        <Header title={"Listado Clientes "} />

        {/* {JSON.stringify(clientes, null, 2)} Debug error */}
        {loading ? <Spiner /> : ""}
        <div className="overflow-auto rounded-xl  shadow-xl  my-5 text-center max-w-7xl  ">
          <table className="w-full">
            <thead className=" bg-white border-b-2 border-gray-200">
              <tr className="  bg-white">
                <th className="p-2"> Id</th>
                <th className="p-2 ">Cliente</th>
                <th className="p-2 ">Contacto</th>
                <th className="p-2 ">Cargado</th>
                <th className="p-2 ">Direccion</th>
                <th className="p-2 ">Ultimo Pedido</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {clientes.length > 0 ? (
                clientes.map((cliente) => (
                  <Cliente key={cliente._id} cliente={cliente} />
                ))
              ) : (
                <p className="my-5 text-center">
                  No hay ningun cliente para mostrar
                </p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListadoClientes;
