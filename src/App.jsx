import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./atoms/tooltip.css";
import FormularioFinal from "./components/FormularioFinal";
import Layout from "./layout/Layout";

// Clientes
import EditarCliente from "./components/clientes/EditarCliente";
import ListadoCliente2 from "./components/clientes/ListadoClientes";
import NuevoCliente from "./components/clientes/NuevoCliente";
import VerCliente from "./components/clientes/VerCliente";

// Context Provider
import { DataBaseProviver } from "./context/DataBaseProvider";
import { GeneralProvider } from "./context/GeneralProvider";
import { PedidosProvider } from "./context/PedidosProvider";

// Pedidos
import VerPedido from "../src/components/pedidos/VerPedido";
import ListadoPedidos from "./components/pedidos/ListadoPedidos";
import NuevoPedido from "./components/pedidos/NuevoPedido";

function App() {
  return (
    <BrowserRouter>
      <GeneralProvider>
        <DataBaseProviver>
          <PedidosProvider>
            {/* Clientes */}
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<FormularioFinal />} />
                {/* <Route path="clientes/listado" element={<ListadoClientes />} /> */}
                <Route path="clientes/listado" element={<ListadoCliente2 />} />
                <Route path="clientes/ver/:id" element={<VerCliente />} />
                <Route path="clientes/nuevo" element={<NuevoCliente />} />
                <Route path="clientes/editar/:id" element={<EditarCliente />} />
              </Route>
              {/* Clientes */}

              {/* Pedidos */}
              <Route path="/" element={<Layout />}>
                <Route index element={<FormularioFinal />} />
                <Route path="pedidos/listado" element={<ListadoPedidos />} />
                <Route path="pedidos/nuevo" element={<NuevoPedido />} />
                <Route path="pedidos/ver/:id" element={<VerPedido />} />
              </Route>
              {/* Pedidos */}
            </Routes>
          </PedidosProvider>
        </DataBaseProviver>
      </GeneralProvider>
    </BrowserRouter>
  );
}

export default App;
