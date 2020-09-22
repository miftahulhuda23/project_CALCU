import React from "react";

const Input = (props) => {
  const { isi } = props;
  return (
    <div type="text" className="Input">
      {isi}
    </div>
  );
};

export default Input;
