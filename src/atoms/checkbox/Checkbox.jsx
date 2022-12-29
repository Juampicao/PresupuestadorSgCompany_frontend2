import React from "react";
import useCheck from "../../hooks/useCheck";
import "./checkbox.css";

const Checkbox = ({
  value1 = "",
  value2 = "",
  onChange,
  defaultChecked = "",
}) => {
  const { isChecked, changeChecked } = useCheck();
  return (
    <div className="font-bold  ">
      {value1}
      <label class="switch switch200">
        <input
          type="checkbox"
          onChange={onChange}
          defaultChecked={defaultChecked}
        />
        <span class="slider slider200"></span>
      </label>
      {value2}
    </div>
  );
};

export default Checkbox;
