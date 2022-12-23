import { useContext } from "react";
import ClientesContext from "../context/ClientesProvider";

// useClientes por useClientes

const useClientes = () => {
  return useContext(ClientesContext);
};

export default useClientes;
