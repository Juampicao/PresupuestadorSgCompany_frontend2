// Todo => Es un formulario reutilizable por this.handleChange
// import axios from "axios";
// import React, { Component } from "react";
// import Accordion from "../atoms/Accordion";
// import "../atoms/FormularioFinal.css";
// import ContenedorFormularios from "./ContendorFormularios";

// // const FormularioReutilizable = () => {
// class FormularioReutilizable extends Component {
//   state = {
//     //Cliente
//     nombreCliente: "",
//     contactoCliente: "",
//     direccionCliente: "",
//     // Producto
//     nombreMaterial: "",
//     descripcion: "",
//     cantidad: "",
//     precioUnitario: "",
//     costoUnitario: "",
//     coeficienteVenta: "",
//     //Empresa
//     nombreEmpresa: "",
//     direccionEmpresa: "",
//     contactoEmpresa: "",
//     aclaracionesGenerales: "",
//     observacionesParticulares: "",
//     validezPrespuesto: "7",
//   };

//   handleChange = ({ target: { value, name } }) =>
//     this.setState({ [name]: value });

//   /**
//    * Conexión con backend para imprimir el pdf
//    */
//   createAndDownloadPdf = () => {
//     console.log("desde createAnd...");
//     console.log(this.state);
//     axios
//       .post("http://localhost:5000/create-pdf", this.state)
//       .then(() =>
//         axios.get("http://localhost:5000/fetch-pdf", {
//           responseType: "blob",
//         })
//       )
//       .then((res) => {
//         const pdfBlob = new Blob([res.data], { type: "application/pdf" });

//         saveAs(pdfBlob, "newPdf.pdf");
//       });
//   };

//   render() {
//     return (
//       <>
//         <ContenedorFormularios>
//           <div className=" p-5  max-w-3xl mx-auto ">
//             <h2 className="tituloPrincipal"> Presupuestos</h2>
//             {/* <Variables /> */}
//             <div className="flex items-center flex-wrap sm:justify-evenly gap-y-3 mt-5">
//               <div className="">
//                 <label htmlFor="coeficienteVenta" className="">
//                   % Coeficiente Venta
//                 </label>
//                 <select
//                   name="coeficienteVenta"
//                   id="coeficienteVenta"
//                   placeholder="$"
//                   className="pl-3 ml-3"
//                   onChange={this.handleChange}
//                 >
//                   <option> 1 </option>
//                   <option> 1.2 </option>
//                   <option> 1.5 </option>
//                   <option> 2 </option>
//                   <option> 2.5 </option>
//                   <option> 3</option>
//                 </select>
//               </div>
//               <div className="">
//                 <label>Validez del Presupuesto</label>
//                 <select
//                   name="validezPrespuesto"
//                   className="inputSelect"
//                   onChange={this.handleChange}
//                   // value="7"
//                 >
//                   <option value="5"> 5 </option>
//                   <option value="7" selected>
//                     7
//                   </option>
//                   <option value="10">10</option>
//                   <option value="15"> 15 </option>
//                   <option value="30"> 30 </option>
//                 </select>
//                 <label htmlFor="">Dias</label>
//               </div>
//             </div>

//             {/*--------- CLIENTE ------- */}
//             <div className="form_container">
//               <h3 className="titulos">Cliente</h3>
//               <div className="form_container_child">
//                 <label htmlFor=""> Nombre</label>
//                 <input
//                   type="text"
//                   placeholder="Nombre cliente.."
//                   name="nombreCliente"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form_container_child">
//                 <label> Direccion</label>
//                 <input
//                   type="text"
//                   placeholder="Direccion cliente.."
//                   name="direccionCliente"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form_container_child">
//                 <label> Contacto</label>
//                 <input
//                   type="text"
//                   placeholder="Contacto cliente.."
//                   name="contactoCliente"
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             {/*--------- PRODUCTO ------- */}
//             <div className="form_container">
//               <h3 className="titulos">Producto</h3>
//               <div className="form_container_child">
//                 <label htmlFor=""> Producto</label>
//                 <input
//                   type="text"
//                   placeholder="Producto a vender .."
//                   name="nombreMaterial"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form_container_child">
//                 <label> Cantidad</label>
//                 <input
//                   type="number"
//                   placeholder="Cantidad a vender.."
//                   name="cantidad"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               {/* <div className="form_container_child">
//                 <label> Precio Unitario</label>
//                 <input
//                   type="text"
//                   placeholder="Precio del producto.."
//                   name="precioUnitario"
//                   onChange={this.handleChange}
//                 />
//               </div> */}
//               <div className="form_container_child">
//                 <label> Costo Unitario</label>
//                 <input
//                   type="number"
//                   placeholder="Agrega una descripcion al producto"
//                   name="costoUnitario"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form_container_child">
//                 <label> Descripcion</label>
//                 <input
//                   type="text"
//                   placeholder="Agrega una descripcion al producto"
//                   name="descripcion"
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <Accordion title="Agregar Producto" />
//             {/*--------- EMPRESA VENDEDORA ------- */}
//             <div className="form_container">
//               <h3 className="titulos">Empresa Vendedora</h3>
//               <div className="form_container_child">
//                 <label> Nombre </label>
//                 <input
//                   type="text"
//                   placeholder="Agrega una descripcion al producto"
//                   name="nombreEmpresa"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form_container_child">
//                 <label> Direccion </label>
//                 <input
//                   type="text"
//                   placeholder="Agrega una descripcion al producto"
//                   name="direccionEmpresa"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form_container_child">
//                 <label> Contacto</label>
//                 <input
//                   type="text"
//                   placeholder="Agrega una descripcion al producto"
//                   name="contactoEmpresa"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form_container_child">
//                 <label> Observaciones Particulares</label>
//                 <input
//                   type="text"
//                   placeholder="Agrega una descripcion al producto"
//                   name="observacionesParticulares"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form_container_child">
//                 <label> Aclaraciones Generales</label>
//                 <input
//                   type="text"
//                   placeholder="Agrega una descripcion al producto"
//                   name="aclaracionesGenerales"
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             {/* <Spiner /> */}
//             <div className="flex">
//               <button
//                 className="botonSubmit mx-auto"
//                 onClick={this.createAndDownloadPdf}
//               >
//                 Crear PDF
//               </button>
//             </div>
//           </div>
//         </ContenedorFormularios>
//       </>
//     );
//   }
// }

// export default FormularioReutilizable;
