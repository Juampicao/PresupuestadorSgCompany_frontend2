import imgPendiente from "../img/newIcons/exclamation.png";
import imgTerminado from "../img/newIcons/success.png";
import imgVendido from "../img/newIcons/ventaNegro.png";

export const estadoPedidosObject = {
  default: {
    value: "pendiente",
  },
  pendiente: {
    // color: `bg-red-100 hover:bg-red-200`,
    img: imgPendiente,
    value: "pendiente",
  },
  terminado: {
    // color: `bg-green-100 hover:bg-green-200`,
    img: imgTerminado,
    value: "terminado",
  },
  vendido: {
    // color: `bg-slate-500 hover:bg-slate-200`,
    img: imgVendido,
    value: "vendido",
  },
};

export const estadoPedidosArray = [
  {
    nombre: "pendiente",
    color: `bg-red-100 hover:bg-red-200`,
    img: imgPendiente,
  },
  {
    nombre: "terminado",
    color: `bg-green-100 hover:bg-green-200`,
    img: imgTerminado,
  },
  {
    nombre: "vendido",
    color: `bg-slate-500 hover:bg-slate-200`,
    img: imgVendido,
  },
];
