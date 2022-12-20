import React, { useState } from "react";
import InputReutilizable from "../components/formularios/ProductoFormulario";

const Accordion = ({ title }) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);
  return (
    <div>
      <button onClick={toggleExpand}>
        {title} <span> {expand ? `-` : `+`} </span>{" "}
      </button>

      {expand && (
        <div className="bg-white">
          {" "}
          <InputReutilizable />{" "}
        </div>
      )}
    </div>
  );
};

export default Accordion;
