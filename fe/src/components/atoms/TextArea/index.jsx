import React from "react";
import "./textarea.scss";
const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea className="text-area" {...rest} />
    </div>
  );
};

export default TextArea;
