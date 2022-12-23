import React from "react";

const FormContainerChild = ({ img, title }) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <img src={img} alt="imagen" className="img-icon " />
        <label htmlFor=""> {title}</label>
      </div>
    </>
  );
};

export default FormContainerChild;
