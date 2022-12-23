import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./atoms/tooltip.css";
import Layout from "./layout/Layout";

// Clientes
import EditarCliente from "./components/clientes/EditarCliente";
import ListadoCliente2 from "./components/clientes/ListadoClientes";
import NuevoCliente from "./components/clientes/NuevoCliente";
import VerCliente from "./components/clientes/VerCliente";

// Context Provider
import { ClientesProvider } from "./context/ClientesProvider";
import { GeneralProvider } from "./context/GeneralProvider";
import { PedidosProvider } from "./context/PedidosProvider";

// Pedidos
import VerPedido from "../src/components/pedidos/VerPedido";
import ListadoPedidos from "./components/pedidos/ListadoPedidos";
import NuevoPedido from "./components/pedidos/NuevoPedido";

// Pruebas
import EditarFormularioFinal from "./components/presupuestos/EditarFormularioFinal";

// Presupuesto Final
import NuevoFormularioFinal from "./components/presupuestos/NuevoFormularioFinal";
import PruebaFormularioFinalEditar from "./components/pruebas/PruebaFormularioFinalEditar";

function App() {
  return (
    <BrowserRouter>
      <GeneralProvider>
        <ClientesProvider>
          <PedidosProvider>
            {/* Clientes */}
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<NuevoFormularioFinal />} />
                <Route
                  path="formulario/editar/:id"
                  index
                  element={<EditarFormularioFinal />}
                />
                {/* <Route path="clientes/listado" element={<ListadoClientes />} /> */}
                <Route path="clientes/listado" element={<ListadoCliente2 />} />
                <Route path="clientes/ver/:id" element={<VerCliente />} />
                <Route path="clientes/nuevo" element={<NuevoCliente />} />
                <Route path="clientes/editar/:id" element={<EditarCliente />} />
              </Route>
              {/* Clientes */}

              {/* Pedidos */}
              <Route path="/" element={<Layout />}>
                <Route index element={<NuevoFormularioFinal />} />
                <Route path="pedidos/listado" element={<ListadoPedidos />} />
                <Route path="pedidos/nuevo" element={<NuevoPedido />} />
                <Route path="pedidos/ver/:id" element={<VerPedido />} />
              </Route>
              {/* Pedidos */}

              {/* Pruebas */}
              <Route>
                <Route
                  path="/pruebas"
                  element={<PruebaFormularioFinalEditar />}
                />
              </Route>
            </Routes>
          </PedidosProvider>
        </ClientesProvider>
      </GeneralProvider>
    </BrowserRouter>
  );
}

export default App;
