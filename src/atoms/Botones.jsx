import React from "react";
import { useNavigate } from "react-router-dom";

import IconoDelete2 from "../img/newIcons/deletColor.png";
import IconoEdit2 from "../img/newIcons/editColor.png";
import IconAdd from "../img/newIcons/iconAdd.png";
import IconoView2 from "../img/newIcons/viewColor.png";
import "./Botones.css";
export const BotonVer = ({ value, onClick }) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        type="button"
        value={value}
        onClick={onClick}
        className="hover:shadow-lg shadow-slate-500 item-center mx-auto p-2 hover:bg-white hover:scale-105 duration-200 hover:duration-200  hover:rounded-full"
      >
        {/* <img src={IconoVer} alt="Borrar" className="h-5" /> */}
        <img src={IconoView2} alt="Borrar" className="h-5" />
      </button>
    </>
  );
};

export const BotonEliminar = ({ value, onClick }) => {
  return (
    <>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        type="button"
        value={value}
        onClick={onClick}
        className="hover:shadow-lg shadow-slate-500 item-center mx-auto p-2 hover:bg-white hover:scale-105 duration-200 hover:duration-200  hover:rounded-full"
      >
        {/* <img src={IconoDelete} alt="Borrar" className="h-5" /> */}
        <img src={IconoDelete2} alt="Borrar" className="h-5" />
      </button>
    </>
  );
};

export const BotonEditar = ({ value, onClick }) => {
  return (
    <>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        type="button"
        value={value}
        onClick={onClick}
        className="hover:shadow-lg shadow-slate-500 item-center mx-auto p-2 hover:bg-white hover:scale-105 duration-200 hover:duration-200 hover:rounded-full"
      >
        {/* <img src={IconoEdit} alt="Borrar" className="h-5" /> */}
        <img src={IconoEdit2} alt="Borrar" className="h-6" />
      </button>
    </>
  );
};

export const BotonCrear = ({ value, onClick }) => {
  return (
    <>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        type="button"
        value={value}
        onClick={onClick}
        className="bg-black rounded-full hover:shadow-lg shadow-slate-500 item-center mx-auto p-2 hover:bg-white hover:scale-105 duration-200 hover:duration-200 hover:rounded-full"
      >
        <img src={IconAdd} alt="Borrar" className="h-6" />
      </button>
    </>
  );
};
export const BotonPrimario = ({ value, onClick, Color }) => {
  return (
    <>
      <input type="submit" className={Color} onClick={onClick} value={value} />
    </>
  );
};

export default {
  BotonEliminar,
  BotonEditar,
  BotonCrear,
  BotonVer,
  BotonPrimario,
};
