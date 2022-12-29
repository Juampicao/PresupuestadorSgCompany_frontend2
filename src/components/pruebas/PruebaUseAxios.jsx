import React from "react";
import useAxios from "../../hooks/useAxios";

const PruebaUseAxios = () => {
  // Url
  const urlClientes = `http://localhost:4000/clientes`;
  const urlPostPrueba = `http://localhost:4000/pruebass`;

  // Objeto Pedido
  const pedido = {
    nombreCliente: "nombre de prueba ...",
    contactoCliente: "contacto de prueba..",
  };

  // Method : "Get"
  const { data, isLoading, error } = useAxios(
    urlClientes,
    `get`,
    "GetAllClientesFn",
    pedido
  );

  // Method : "Post"
  const {
    data: prueba,
    isLoading: isLoading2,
    error: error2,
  } = useAxios(urlPostPrueba, `post`, "PruebaFN", pedido);

  return (
    <>
      {/* PRUEBA GET  */}

      <div className="block">
        <h1 className="font-black">Clientes</h1>
        {isLoading ? (
          <div> loading ...</div>
        ) : (
          <div>La informacion es {JSON.stringify(data)}</div>
        )}
      </div>

      <br></br>
      <br></br>

      {/* PRUEBA POST */}
      <div className="block">
        <h1 className="font-black">PRUEBA</h1>
        {isLoading2 ? (
          <div> loading ...</div>
        ) : (
          <div>
            La informacion es {prueba ? JSON.stringify(prueba) : "NO HAY INFO"}
            {error2 ? (
              <p>
                <span className="font-bold"> Error: </span>
                {JSON.stringify(error2)}
              </p>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default PruebaUseAxios;
