import React from "react";
import Header from "../../atoms/Header";
import FormularioFinal from "../presupuestos/FormularioFinal";
// import ClienteFormulario from "../formularios/ClienteFormulario";
// import EmpresaFormulario from "../formularios/EmpresaFormulario";
// import ProductoFormulario from "../formularios/ProductoFormulario";
// import VariablesFormulario from "../formularios/VariablesFormulario";

const objetoPedido = {
  descripcionPedido: "3x5 del granito",
  nombrePedido: "Osvaldo Granito",
  nombreCliente: "Burbon SA",
  fecha: "2022-12-21T13:07:29.703Z",
  estado: "terminado",
  numeroCotizacion: "SA-3334-Osvaldo Granito",
  id: 2038,
};

const objetoVariables = {
  validezPresupuesto: "7",
  numeroCotizacion: "SG-1111",
  fechaPresupuesto: "2022-10-10",
  descuentoTotal: 10,
  tipoDescuento: "profesional",
};

const objetoCliente = {
  nombreCliente: "osvaldo",
  contactoCliente: "111111",
  direccionCliente: "la casa de osvaldo",
  nombrePedido: "Osvalod",
  descripcionPedido: "la descripciooon es essta",
};

const objetoEmpresa = {
  nombreEmpresa: "SG company",
  direccionEmpresa: "zapiola 1212",
  contactoEmpresa: "29492492",
  observacionesParticulares: "observaciones en particular de SG",
  aclaracionesGenerales: "plazo segun estipulado",
};

const arrayPoductsList = [
  {
    cantidad: 10,
    costoUnitario: 100,
    descripcion: "holaa",
    nombreMaterial: "Madera",
    coeficienteVenta: 1.5,
  },
  {
    cantidad: 30,
    costoUnitario: 300,
    descripcion: "holaa",
    nombreMaterial: "CACA",
    coeficienteVenta: 2,
  },
];

const pedido = {
  descripcionPedido: "50 metros de granito termolado ahre",
  nombrePedid: "ESTE FUNCIONA",
  nombreCliente: "Herrajes SRL",
  fecha: "2000-10-05",
  estado: "terminado",
  numeroCotizacion: "KA-2222-FUNCIONA",
  id: 877,
  cliente: {
    nombreCliente: "Herrajes SRL",
    contactoCliente: "222222",
    direccionCliente: "Congreso 3002 5A",
    nombrePedido: "Pedido-Herrajes",
    descripcionPedido: "la descripciooon es Pedido-Herrajes",
  },
  empresa: {
    nombreEmpresa: "SG Company",
    direccionEmpresa: "Zapiola 2022",
    contactoEmpresa: "1122334455",
    observacionesParticulares:
      "Formas y condiciones de contratación: Precios indicados no incluyen IVA .Valores expresados en dólares EE.UU. Tipo  de cambio : vendedor -Bco Nación. Forma de pago:70% acopio y saldo contra entrega.",
    aclaracionesGenerales:
      "Plazo de entrega : hasta 25 días  desde el replanteo.",
  },
  productosList: [
    {
      cantidad: 10,
      costoUnitario: 100,
      descripcion: "holaa",
      nombreMaterial: "Madera",
      coeficienteVenta: 1.5,
    },
    {
      cantidad: 30,
      costoUnitario: 300,
      descripcion: "holaa",
      nombreMaterial: "CACA",
      coeficienteVenta: 2,
    },
    {
      cantidad: 50,
      costoUnitario: 300,
      descripcion: "holaa",
      nombreMaterial: "CACA",
      coeficienteVenta: 2,
    },
  ],
  variables: {
    numeroCotizacion: "SA-3333-Pedido-Herrajes",
    validezPresupuesto: 7,
    numeroPresupuesto: "SA-4444",
    fechaPresupuesto: "2022-12-22",
    descuentoTotal: "10",
    tipoDescuento: "profesional",
  },
};

// let presupuesto = new Presupuesto(
//   objetoVariables,
//   objetoCliente,
//   arrayPoductsList,
//   objetoEmpresa
// );

const PruebaFormularioFinalEditar = () => {
  return (
    <>
      {/* <VariablesFormulario objetoVariables={objetoVariables} />
      <ClienteFormulario objetoCliente={objetoCliente} />
      <EmpresaFormulario objetoEmpresa={objetoEmpresa} />
      <ProductoFormulario arrayProductList={arrayPoductsList} /> */}

      <Header title={"FORM FINAL"} />
      <FormularioFinal pedido={pedido} />
    </>
  );
};

export default PruebaFormularioFinalEditar;
