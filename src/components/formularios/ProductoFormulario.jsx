import React, { useState } from "react";
import Error from "../../atoms/Error";
import useGeneral from "../../hooks/useGeneral";
const ProductoFormulario = () => {
  const { productosList, setProductosList, error, setError, validarForm } =
    useGeneral();

  // Todo => Vincular con el generalProvider y backend.
  const [moneda, setMoneda] = useState("U$D");
  const [isChecked, setIsChecked] = useState(false);

  /**
   * Pruebas checkbox moneda
   */
  const handleOnChangeCheck = () => {
    setIsChecked(!isChecked);
  };

  /**
   * Cambiar atributos de un producto.
   * @param {*} e
   * @param {*} index
   */
  const handleProductoChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...productosList];
    list[index][name] = value;
    setProductosList(list);
    console.log(productosList);
  };

  /**
   * Remove a product.
   * @param {*} index
   */
  const handleProductoRemove = (index) => {
    const list = [...productosList];
    list.splice(index, 1);
    setProductosList(list);
  };

  /**
   * Add new Product.
   */
  const handleProductAdd = () => {
    setProductosList([...productosList, { nombreMaterial: "" }]);
  };

  return (
    <>
      {productosList.map((product, index) => (
        <div key={index} className="form_container">
          <div className="form-field">
            <div>
              <h3 className="titulos"> {index + 1}° Producto</h3>

              {/*  ------ Producto Formulario Precio Venta Manual -------*/}
              {/* <div className="form_container_child flex">
                {isChecked ? (
                  <label htmlFor="" className="tooltip">
                    Escribir Precio de Venta Manual
                  </label>
                ) : (
                  <label htmlFor="" className="tooltip">
                    Escribir Costo y sacar automatico el precio
                  </label>
                )}
                <input
                  type="checkbox"
                  value="Price"
                  checked={isChecked}
                  onChange={handleOnChangeCheck}
                />
              </div> */}
              {/* {isChecked ? (
                <div className="form_container_child">
                  <label> Precio Venta Unitario </label>
                  <input
                    type="number"
                    placeholder="Agrega el precio venta del producto"
                    name="precioUnitario"
                    value={product.precioUnitario}
                    onChange={(e) => handleProductoChange(e, index)}
                    onBlur={() => validarForm(product.precioUnitario)}
                  />
                  {error ? <Error msg="Completa el precio unitario" /> : ""}
                </div>
              ) : (
                ""
              )} */}

              {/* -------- Producto Formulario Costo  ------- */}
              <div className="form_container_child ">
                <div>
                  <label htmlFor="coeficienteVenta" className="tooltip">
                    % Multiplicador de Venta
                  </label>
                  <select
                    name="coeficienteVenta"
                    id="coeficienteVenta"
                    placeholder="$"
                    className="block  p-2 px-10 bg-gray-100 rounded-md mt-1 text-start"
                    value={
                      product.coeficienteVenta
                        ? product.coeficienteVenta
                        : (product.coeficienteVenta = 1.5)
                    }
                    onChange={(e) => handleProductoChange(e, index)}
                    // onBlur={() => validarForm(product.coeficienteVenta)}
                  >
                    <option> -- select-- </option>
                    <option value="otro">Otro</option>
                    <option> 1 </option>
                    <option> 1.2 </option>
                    <option>1.5</option>
                    <option> 2 </option>
                    <option> 2.5 </option>
                    <option> 3</option>
                    <option> 4</option>
                  </select>

                  {product.coeficienteVenta === "otro" ? (
                    <input
                      type="number"
                      placeholder="escriba el nuevo % multiplicado de ventas"
                      className="form_container_child"
                    ></input>
                  ) : (
                    ""
                  )}
                </div>

                {/* //TODO => Vincular.. */}
                {/* Moneda */}
                <label htmlFor="coeficienteVenta" className="tooltip">
                  Moneda a cotizar
                </label>
                <select
                  name=""
                  id=""
                  className="block  p-2 px-10 bg-gray-100 rounded-md mt-1 text-start"
                  value={moneda}
                  onChange={(e) => setMoneda(e.target.value)}
                >
                  <option value="Peso Argentino"> Pesos Argentinos </option>
                  <option value="U$D"> U$D </option>
                </select>
              </div>
              {/* Moneda */}

              {error.coeficienteVenta ? (
                <Error msg="Completa el % coeficiente  de venta" />
              ) : (
                ""
              )}
              {/* Nombre Producto */}
              <div className="form_container_child">
                <label htmlFor=""> Producto</label>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Producto a vender .."
                  name="nombreMaterial"
                  value={product.nombreMaterial}
                  onChange={(e) => handleProductoChange(e, index)}
                />
              </div>
              {/* Cantidad  */}
              <div className="form_container_child">
                <label> Cantidad</label>
                <input
                  type="number"
                  placeholder="Cantidad a vender.."
                  name="cantidad"
                  value={product.cantidad}
                  onChange={(e) => handleProductoChange(e, index)}
                  onBlur={() => validarForm(product.cantidad)}
                />
              </div>
              {error ? <Error msg="Completa la cantidad total" /> : ""}

              {/* Costo Unitario  y Precio Venta Unitario*/}
              <div className="form_container_child">
                <label> Costo Unitario</label>
                <input
                  type="number"
                  placeholder="Agrega el costo del producto"
                  name="costoUnitario"
                  value={product.costoUnitario}
                  onChange={(e) => handleProductoChange(e, index)}
                  onBlur={() => validarForm(product.costoUnitario)}
                />
              </div>
              {error ? <Error msg="Completa el costo unitario" /> : ""}

              {/* Descripcion */}
              <div className="form_container_child">
                <label> Descripcion</label>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Agrega una descripcion al producto"
                  name="descripcion"
                  value={product.descripcion}
                  onChange={(e) => handleProductoChange(e, index)}
                />
              </div>

              <div className="flex my-3 gap-x-3 pl-3">
                {productosList.length - 1 === index &&
                  productosList.length < 8 && (
                    <button
                      type="button"
                      onClick={handleProductAdd}
                      className="bg-green-600 text-center text-white py-2.5 px-5 rounded-xl "
                    >
                      <span>Nuevo Producto </span>
                    </button>
                  )}
                {productosList.length !== 1 && (
                  <button
                    type="button"
                    className="bg-red-600 text-white py-2.5 px-5 rounded-xl"
                    onClick={() => handleProductoRemove(index)}
                  >
                    <span> Quitar {index + 1}° Producto </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductoFormulario;

//? Tooltip example
{
  /* <label htmlFor="coeficienteVenta" className="tooltip">
  <span className="tooltiptext">
    Multiplica el costo unitario de cada producto
  </span>
  <span className=" sm:hidden">%</span>

  <span className="hidden sm:flex">% Coeficiente Venta</span>
</label> */
}

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import useGeneral from "../../hooks/useGeneral";
// const ProductoFormulario = () => {
//   const { producto, setProducto, productosList, setProductosList } =
//     useGeneral();
//   const [nombreMaterial, setNombreMaterial] = useState("");
//   const [cantidad, setCantidad] = useState("");
//   const [costoUnitario, setCostoUnitario] = useState("");
//   const [descripcion, setDescripcion] = useState("");
//   const [precioUnitario, setPrecioUnitario] = useState("");

//   useEffect(() => {
//     setProducto({
//       nombreMaterial,
//       cantidad,
//       costoUnitario,
//       precioUnitario,
//       descripcion,
//     });
//   }, [nombreMaterial, cantidad, costoUnitario, precioUnitario, descripcion]);

//   return (
//     <>
//       <div className="form_container">
//         <div className="form_container_child">
//           <label htmlFor=""> Producto</label>
//           <input
//             type="text"
//             placeholder="Producto a vender .."
//             name="nombreMaterial"
//             onChange={(e) => setNombreMaterial(e.target.value)}
//           />
//         </div>
//         <div className="form_container_child">
//           <label> Cantidad</label>
//           <input
//             type="number"
//             placeholder="Cantidad a vender.."
//             name="cantidad"
//             onChange={(e) => setCantidad(e.target.value)}
//           />
//         </div>
//         <div className="form_container_child">
//           <label> Precio Unitario</label>
//           <input
//             type="number"
//             placeholder="Precio del producto.."
//             name="precioUnitario"
//             onChange={(e) => setPrecioUnitario(e.target.value)}
//           />
//         </div>
//         <div className="form_container_child">
//           <label> Costo Unitario</label>
//           <input
//             type="number"
//             placeholder="Agrega una descripcion al producto"
//             name="costoUnitario"
//             onChange={(e) => setCostoUnitario(e.target.value)}
//           />
//         </div>
//         <div className="form_container_child">
//           <label> Descripcion</label>
//           <input
//             type="text"
//             placeholder="Agrega una descripcion al producto"
//             name="descripcion"
//             onChange={(e) => setDescripcion(e.target.value)}
//           />
//         </div>
//         {/* <button onClick={handleSubmit}> Enviar</button> */}
//       </div>
//     </>
//   );
// };

// export default ProductoFormulario;
